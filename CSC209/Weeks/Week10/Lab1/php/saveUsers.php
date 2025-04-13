<html>
<body>
Welcome <?php echo $_POST["name"]; ?><br>
Your password is: <?php echo $_POST["password"]; ?>

<?php
$file = fopen("../output/users.txt","w");
fwrite($file,$_POST["name"]);
fwrite($file,$_POST["password"]);
fclose($file);
?>
</body>
</html>