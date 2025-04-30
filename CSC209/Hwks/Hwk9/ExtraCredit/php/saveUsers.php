<html>
<body>
<link rel="stylesheet" href="../css/style.css">

<?php
$username = $_POST["uname"];
$password = $_POST["psw"];
$filename = "../output/users.json";
$users = [];

if (file_exists($filename)) {
    $json = file_get_contents($filename);
    $users = json_decode($json, true);
    if (isset($users[$username])) {
        echo "<h1>Register failed!</h1>";
        echo "<p>The username has already been used.</p>";
        echo '<form action="../login.html" method="get">
                <button style="width:auto;">Back to Login</button>
              </form>';
        exit;
    }
}
$users[$username] = $password;
file_put_contents($filename, json_encode($users, JSON_PRETTY_PRINT));
?>

Welcome <?php echo $_POST["uname"]; ?><br>
Your password is: <?php echo $_POST["psw"]; ?>

<form action="../login.html" method="get">
  <button style="width:auto;">Back to Login</button>
</form>
</body>
</html>