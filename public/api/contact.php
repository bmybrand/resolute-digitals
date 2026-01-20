<?php
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["ok" => false, "error" => "Method not allowed"]);
  exit;
}

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);
if (!is_array($data)) {
  $data = $_POST;
}

$name = trim((string)($data["name"] ?? ""));
$email = trim((string)($data["email"] ?? ""));
$phone = trim((string)($data["phone"] ?? ""));
$interest = trim((string)($data["interest"] ?? ""));
$budget = trim((string)($data["budget"] ?? ""));
$country = trim((string)($data["country"] ?? ""));
$message = trim((string)($data["message"] ?? ""));

if ($name === "" || $email === "" || $message === "") {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "Missing required fields"]);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "Invalid email"]);
  exit;
}

$safeEmail = preg_replace("/[\r\n]+/", "", $email);
$safeName = preg_replace("/[\r\n]+/", "", $name);

$to = "developer@resolutedigitalspk.com";
$subject = "New contact form submission";
$host = $_SERVER["HTTP_HOST"] ?? "localhost";
$host = preg_replace("/^www\./", "", $host);

$smtpHost = getenv("SMTP_HOST") ?: "cpl16.main-hosting.eu";
$smtpPort = (int)(getenv("SMTP_PORT") ?: 465);
$smtpUser = getenv("SMTP_USER") ?: "developer@resolutedigitalspk.com";
$smtpPass = getenv("SMTP_PASS") ?: "~Zj_xEC4@6Z-(T%w";
$fromEmail = getenv("SMTP_FROM_EMAIL") ?: $smtpUser;
$fromName = getenv("SMTP_FROM_NAME") ?: "Resolute Digitals";

if ($smtpPass === "") {
  http_response_code(500);
  echo json_encode(["ok" => false, "error" => "SMTP password not set"]);
  exit;
}

$bodyLines = [
  "Name: " . $safeName,
  "Email: " . $safeEmail,
  "Phone: " . $phone,
  "Interest: " . $interest,
  "Budget: " . $budget,
  "Country: " . $country,
  "Message:",
  $message,
];

$body = implode("\n", $bodyLines);

function smtp_read($socket) {
  $data = "";
  while ($line = fgets($socket, 515)) {
    $data .= $line;
    if (preg_match("/^\\d{3} /", $line)) {
      break;
    }
  }
  return $data;
}

function smtp_expect($socket, $codes) {
  $response = smtp_read($socket);
  $code = (int)substr($response, 0, 3);
  if (!in_array($code, $codes, true)) {
    throw new Exception("SMTP error: " . trim($response));
  }
  return $response;
}

function smtp_cmd($socket, $cmd, $codes) {
  fwrite($socket, $cmd . "\r\n");
  return smtp_expect($socket, $codes);
}

function smtp_send_mail($config, $to, $subject, $body, $replyTo) {
  $socket = stream_socket_client(
    "ssl://" . $config["host"] . ":" . $config["port"],
    $errno,
    $errstr,
    10,
    STREAM_CLIENT_CONNECT
  );
  if (!$socket) {
    throw new Exception("SMTP connect failed: " . $errstr);
  }

  smtp_expect($socket, [220]);
  smtp_cmd($socket, "EHLO " . $config["domain"], [250]);
  smtp_cmd($socket, "AUTH LOGIN", [334]);
  smtp_cmd($socket, base64_encode($config["user"]), [334]);
  smtp_cmd($socket, base64_encode($config["pass"]), [235]);
  smtp_cmd($socket, "MAIL FROM:<" . $config["from_email"] . ">", [250]);
  smtp_cmd($socket, "RCPT TO:<" . $to . ">", [250, 251]);
  smtp_cmd($socket, "DATA", [354]);

  $headers = [
    "From: " . $config["from_name"] . " <" . $config["from_email"] . ">",
    "Reply-To: " . $replyTo,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
  ];
  $message = implode("\r\n", $headers) . "\r\n" .
    "Subject: " . $subject . "\r\n" .
    "\r\n" .
    $body;

  fwrite($socket, $message . "\r\n.\r\n");
  smtp_expect($socket, [250]);
  smtp_cmd($socket, "QUIT", [221]);
  fclose($socket);
}

$logFile = __DIR__ . "/contact-mail.log";

try {
  smtp_send_mail(
    [
      "host" => $smtpHost,
      "port" => $smtpPort,
      "user" => $smtpUser,
      "pass" => $smtpPass,
      "from_email" => $fromEmail,
      "from_name" => $fromName,
      "domain" => $host,
    ],
    $to,
    $subject,
    $body,
    $safeEmail
  );
} catch (Exception $e) {
  error_log($e->getMessage() . "\n", 3, $logFile);
  http_response_code(500);
  echo json_encode(["ok" => false, "error" => "SMTP failed"]);
  exit;
}

echo json_encode(["ok" => true]);
