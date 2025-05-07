<?php
header('Content-Type: application/json');
ini_set('display_errors', 1);
error_reporting(E_ALL);

$data = json_decode(file_get_contents("php://input"), true);
$usernameToDelete = $data["username"] ?? null;

if (!$usernameToDelete) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Username not provided."]);
    exit;
}
$usersFile = "../output/users.json";
if (!file_exists($usersFile)) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Users file not found."]);
    exit;
}
$users = json_decode(file_get_contents($usersFile), true);
if (!is_array($users)) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to read user data."]);
    exit;
}
if ($usernameToDelete === "admin") {
    echo json_encode(["success" => false, "message" => "Admin account cannot be deleted."]);
    exit;
}
if (isset($users[$usernameToDelete])) {
    unset($users[$usernameToDelete]);
    file_put_contents($usersFile, json_encode($users, JSON_PRETTY_PRINT));
    echo json_encode(["success" => true, "message" => "User '$usernameToDelete' deleted successfully."]);
} else {
    http_response_code(404);
    echo json_encode(["success" => false, "message" => "User '$usernameToDelete' not found."]);
}
?>
