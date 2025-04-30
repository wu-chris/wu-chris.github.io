<html>
<body>
Welcome <?php echo $_POST["name"]; ?><br>
Your password is: <?php echo $_POST["password"]; ?>

<?php
$file = fopen("../output/users.txt","a");
fwrite($file,$_POST["name"]. "\n");
fwrite($file,$_POST["password"]. "\n");
fclose($file);
?>
</body>
</html>