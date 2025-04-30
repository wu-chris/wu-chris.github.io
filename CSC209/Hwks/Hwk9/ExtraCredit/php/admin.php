<html>
<body>

<?php
$filename = "../output/users.json";
if (file_exists($filename)) {
    $json = file_get_contents($filename);
    $users = json_decode($json, true);
    $userCount = count($users);
    
    echo "<h2>Number of users: " . $userCount . "</h2>";
    echo "<h3>User List:</h3>";
    echo "<ul>";
    foreach ($users as $uname => $psw) {
        echo "<li>username: " . $uname . "; password: " . $psw . "</li>";
    }
    echo "</ul>";
} else {
    echo "<h2>No users found.</h2>";
}
?>

</body>
</html>
