<?php

$username = $_POST['uname'];
$password = $_POST['psw'];
$adminUserName = "admin";
$adminPassword = "123";
if ($username === $adminUserName && $password === $adminPassword) {
    header("Location: ../admin.html");
    exit;
}


$filename = "../output/users.txt";
if (file_exists($filename)) {
    $lines = file($filename, FILE_IGNORE_NEW_LINES);
    $userCount = count($lines) / 2;
    for ($i = 0; $i < count($lines); $i += 2) {
        if ($username === $lines[$i] && $password === $lines[$i+1]) {
            echo "<h1>Login successful!</h1>";
            echo "<p>Welcome, " . $username . ".</p>";
            exit;
        }
    }
    echo "<h1>Login failed!</h1>";
    echo "<p>Incorrect username or password.</p>";
} 
else {
    echo "<h1>Login failed!</h1>";
    echo "<p>Incorrect username or password.</p>";
}

$correctUsername = "admin";
$correctPassword = "password"; 
?>
