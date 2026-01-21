<?php
header("Content-Type: application/json; charset=UTF-8");

// IMPORTANT: avoid CDN/browser caching a null result
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Pragma: no-cache");

function first_public_ip_from_xff(string $xff): ?string {
  $parts = array_map("trim", explode(",", $xff));
  foreach ($parts as $ip) {
    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
      return $ip;
    }
  }
  return null;
}

function upper_or_null($v) {
  if ($v === null) return null;
  $v = strtoupper(trim((string)$v));
  return $v === "" ? null : $v;
}

/**
 * 1) Best case: CDN provides country header (Cloudflare / others)
 */
$headerCountry = null;

if (!empty($_SERVER["HTTP_CF_IPCOUNTRY"])) {
  $headerCountry = $_SERVER["HTTP_CF_IPCOUNTRY"];
} elseif (!empty($_SERVER["HTTP_X_COUNTRY_CODE"])) {
  $headerCountry = $_SERVER["HTTP_X_COUNTRY_CODE"];
} elseif (!empty($_SERVER["HTTP_GEOIP_COUNTRY_CODE"])) {
  $headerCountry = $_SERVER["HTTP_GEOIP_COUNTRY_CODE"];
}

$headerCountry = upper_or_null($headerCountry);
if ($headerCountry) {
  echo json_encode(["ok" => true, "country_code" => $headerCountry]);
  exit;
}

/**
 * 2) Determine real client IP behind proxy/CDN
 */
$ip = null;

if (!empty($_SERVER["HTTP_CF_CONNECTING_IP"])) {
  $ip = trim($_SERVER["HTTP_CF_CONNECTING_IP"]);
} elseif (!empty($_SERVER["HTTP_X_FORWARDED_FOR"])) {
  $ip = first_public_ip_from_xff($_SERVER["HTTP_X_FORWARDED_FOR"]);
} elseif (!empty($_SERVER["HTTP_X_REAL_IP"])) {
  $ip = trim($_SERVER["HTTP_X_REAL_IP"]);
} elseif (!empty($_SERVER["REMOTE_ADDR"])) {
  $ip = trim($_SERVER["REMOTE_ADDR"]);
}

if (!$ip || $ip === "127.0.0.1" || $ip === "::1") {
  echo json_encode(["ok" => true, "country_code" => null]);
  exit;
}

/**
 * 3) Fallback geo lookup using multiple services
 */

// Try ipapi.co first
$url = "https://ipapi.co/" . urlencode($ip) . "/json/";
$context = stream_context_create([
  "http" => [
    "timeout" => 3,
    "header" => "User-Agent: resolvedigitals-geo/1.0\r\n",
  ],
]);

$response = @file_get_contents($url, false, $context);

if ($response === false && function_exists("curl_init")) {
  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_TIMEOUT, 3);
  curl_setopt($ch, CURLOPT_HTTPHEADER, ["User-Agent: resolvedigitals-geo/1.0"]);
  $response = curl_exec($ch);
  curl_close($ch);
}

$countryCode = null;

if ($response !== false) {
  $payload = json_decode($response, true);
  $countryCode = is_array($payload) ? ($payload["country_code"] ?? $payload["country"] ?? null) : null;
}

// If ipapi failed or returned null, try ip-api.com as fallback
if (!$countryCode) {
  $fallbackUrl = "http://ip-api.com/json/" . urlencode($ip) . "?fields=status,message,country,countryCode,city,regionName,query";
  $fallbackResponse = @file_get_contents($fallbackUrl, false, $context);
  
  if ($fallbackResponse === false && function_exists("curl_init")) {
    $ch = curl_init($fallbackUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 3);
    $fallbackResponse = curl_exec($ch);
    curl_close($ch);
  }
  
  if ($fallbackResponse !== false) {
    $fallbackPayload = json_decode($fallbackResponse, true);
    if (is_array($fallbackPayload) && $fallbackPayload["status"] === "success") {
      $countryCode = $fallbackPayload["countryCode"] ?? null;
    }
  }
}

$countryCode = upper_or_null($countryCode);
echo json_encode(["ok" => true, "country_code" => $countryCode]);
