<html>
<body>

<?php
$filename = "../output/users.txt";
if (file_exists($filename)) {
    $lines = file($filename, FILE_IGNORE_NEW_LINES);
    $userCount = count($lines) / 2;
    
    echo "<h2>Number of users: " . $userCount . "</h2>";
    echo "<h3>User List:</h3>";
    echo "<ul>";
    for ($i = 0; $i < count($lines); $i += 2) {
        echo "<li>". "username: " . $lines[$i] . "; password: ". $lines[$i+1] . "</li>";
    }
    echo "</ul>";
} else {
    echo "<h2>No users found.</h2>";
}
?>

</body>
</html>
