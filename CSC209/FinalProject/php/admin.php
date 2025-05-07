<?php
$usersFile = "../output/users.json";
if (!file_exists($usersFile)) {
    http_response_code(500);
    echo json_encode(["error" => "Users file not found."]);
    exit;
}

$users = json_decode(file_get_contents($usersFile), true);

if (!$users) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to parse users file."]);
    exit;
}

header('Content-Type: application/json');
echo json_encode($users);
?>

