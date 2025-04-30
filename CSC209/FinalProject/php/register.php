<?php
$data = json_decode(file_get_contents('php://input'), true);
$filename = "../output/users.json";
$users = [];

if (file_exists($filename)) {
    $users = json_decode(file_get_contents($filename), true);
}
if (!file_exists($filename)) {
    file_put_contents($filename, json_encode([]));
}

if ($users[$data['username']]) {
    echo json_encode(["success" => false, "message" => "Username already exists."]);
    exit;
}

$users[$data['username']] = $data['password'];
file_put_contents($filename, json_encode($users));
echo json_encode(["success" => true, "message" => "Registration successful."]);
?>