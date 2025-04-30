<html>
<body>
<link rel="stylesheet" href="../css/style.css">

<?php
$username = $_POST["uname"];
$password = $_POST["psw"];
$filename = "../output/users.txt";
if (file_exists($filename)) {
    $lines = file($filename, FILE_IGNORE_NEW_LINES);
    for ($i = 0; $i < count($lines); $i += 2) {
        if ($username === $lines[$i]) {
            echo "<h1>Register failed!</h1>";
            echo "<p>The username has already been used.</p>";
            echo '<form action="../login.html" method="get">
                    <button style="width:auto;">Back to Login</button>
                  </form>';
            exit;
        }
    }
} 
$file = fopen("../output/users.txt","a");
fwrite($file,$username. "\n");
fwrite($file,$password. "\n");
fclose($file);
?>

Welcome <?php echo $_POST["uname"]; ?><br>
Your password is: <?php echo $_POST["psw"]; ?>

<form action="../login.html" method="get">
  <button style="width:auto;">Back to Login</button>
</form>
</body>
</html>