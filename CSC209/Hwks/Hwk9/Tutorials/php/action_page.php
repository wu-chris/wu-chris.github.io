<?php
$username = $_POST['uname'];
$password = $_POST['psw'];

// Assume the correct login credentials
$correctUsername = "admin";
$correctPassword = "password"; 

if ($username === $correctUsername && $password === $correctPassword) {
    echo "<h1>Login successful!</h1>";
    echo "<p>Welcome, " . $username . ".</p>";
} else {
    echo "<h1>Login failed!</h1>";
    echo "<p>Incorrect username or password.</p>";
}
?>
