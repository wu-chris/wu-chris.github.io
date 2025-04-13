<?php
$firstName = $_GET['fname'];
$lastName = $_GET['lname'];
$email = $_GET['lemail'];

echo "<p>First Name: " . htmlspecialchars($firstName) . "</p>";
echo "<p>Last Name: " . htmlspecialchars($lastName) . "</p>";
echo "<p>Email Address: " . htmlspecialchars($email) . "</p>";
?>