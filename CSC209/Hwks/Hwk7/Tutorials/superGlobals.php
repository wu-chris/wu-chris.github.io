<!DOCTYPE html>
<html>
<body>

<?php  
function myfunction() {
  $GLOBALS["x"] = 100;
}

myfunction();

echo $GLOBALS["x"];
echo $x;
echo "<br>";
echo $_SERVER['PHP_SELF'];
echo "<br>";
$name = $_REQUEST['fname'];
echo $name;
echo "<br>";
$name = $_POST['fname'];
echo $name;
echo "<br>";
echo $_GET["name"];
echo $_GET["email"];
?>  

</body>
</html>