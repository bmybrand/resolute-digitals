<?php
header("Content-Type: application/json; charset=UTF-8");
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");

echo json_encode([
  "ok" => true,
  "muslim_app_proxy" => file_exists(__DIR__ . "/muslim-app-subscription.php"),
  "checked_at" => gmdate("c"),
]);
