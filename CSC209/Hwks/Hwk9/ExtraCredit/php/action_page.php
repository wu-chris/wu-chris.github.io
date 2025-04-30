<?php

$username = $_POST['uname'];
$password = $_POST['psw'];
$adminUserName = "admin";
$adminPassword = "123";
if ($username === $adminUserName && $password === $adminPassword) {
    header("Location: ../admin.html");
    exit;
}


$filename = "../output/users.json";
if (file_exists($filename)) {
    $json = file_get_contents($filename);
    $users = json_decode($json, true);
    if ($users[$username] && $users[$username] === $password) {
        echo "<h1>Login successful!</h1>";
        echo "<p>Welcome, " . $username . ".</p>";
        exit;
    } else {
        echo "<h1>Login failed!</h1>";
        echo "<p>Incorrect username or password.</p>";
    }
} else {
    echo "<h1>Login failed!</h1>";
    echo "<p>No user data found.</p>";
}
?>
