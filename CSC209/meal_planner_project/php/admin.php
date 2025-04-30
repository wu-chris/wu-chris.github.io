<?php
$filename = "../output/users.json";

if (file_exists($filename)) {
    $users = json_decode(file_get_contents($filename), true);
    echo "<h2>Total Users: " . count($users) . "</h2>";
    echo "<ul>";
    foreach ($users as $uname => $psw) {
        echo "<li>User: " . htmlspecialchars($uname) . "</li>";
    }
    echo "</ul>";
} else {
    echo "<h2>No users registered yet.</h2>";
}
?>
