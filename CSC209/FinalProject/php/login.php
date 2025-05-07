<?php
$data = json_decode(file_get_contents('php://input'), true);
$filename = "../output/users.json";

if (!file_exists($filename)) {
    echo json_encode(["success" => false, "message" => "No users found."]);
    exit;
}

$users = json_decode(file_get_contents($filename), true);
$username = $data['username'];
$password = $data['password'];

if (isset($users[$username]) && $users[$username] === $password) {
    echo json_encode(["success" => true, "message" => "Login successful."]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid username or password."]);
}
?>

