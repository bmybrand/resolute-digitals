<?php
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(204);
  exit;
}

$apiBase = rtrim(getenv("MUSLIM_APP_API_URL") ?: "https://muslim-app-backend-dev--muslimapp-prod.us-east4.hosted.app", "/");
$action = $_GET["action"] ?? "";

function proxy_json_response(int $status, string $body): void {
  http_response_code($status);
  echo $body;
  exit;
}

function proxy_backend(string $method, string $url, ?string $body = null): void {
  if (!function_exists("curl_init")) {
    proxy_json_response(500, json_encode(["message" => "cURL is not available on the server"]));
  }

  $headers = ["Accept: application/json"];
  if ($body !== null) {
    $headers[] = "Content-Type: application/json";
  }

  $ch = curl_init($url);
  curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST => $method,
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_TIMEOUT => 90,
    CURLOPT_CONNECTTIMEOUT => 20,
  ]);

  if ($body !== null) {
    curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
  }

  $response = curl_exec($ch);
  $status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
  $error = curl_error($ch);
  curl_close($ch);

  if ($response === false) {
    proxy_json_response(502, json_encode(["message" => $error !== "" ? $error : "Unable to reach payment service"]));
  }

  if ($status < 100) {
    proxy_json_response(502, json_encode(["message" => "Invalid response from payment service"]));
  }

  proxy_json_response($status, $response);
}

if ($action === "catalog" && $_SERVER["REQUEST_METHOD"] === "GET") {
  proxy_backend("GET", $apiBase . "/subscription-requests/catalog");
}

if ($action === "ewallet" && $_SERVER["REQUEST_METHOD"] === "POST") {
  $raw = file_get_contents("php://input");
  if ($raw === false || trim($raw) === "") {
    proxy_json_response(400, json_encode(["message" => "Missing request body"]));
  }

  proxy_backend("POST", $apiBase . "/swich/ewallet", $raw);
}

proxy_json_response(405, json_encode(["message" => "Method not allowed"]));
