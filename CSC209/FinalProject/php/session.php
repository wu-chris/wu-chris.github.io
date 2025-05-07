<?php
session_start();
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['username']) && isset($data['password'])) {
    $_SESSION['loggedInUser'] = $data['username'];
    $_SESSION['password'] = $data['password'];
}
?>
