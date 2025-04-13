<!DOCTYPE html>
<html>
<body>

<?php  
function myfunction() {
  $GLOBALS["x"] = 100;
}

myfunction();

echo isset($GLOBALS["x"]) ? $GLOBALS["x"] : "x is not set";
echo "<br>";

echo $_SERVER['PHP_SELF'];
echo "<br>";

$name = isset($_REQUEST['fname']) ? $_REQUEST['fname'] : "No fname provided";
echo $name;
echo "<br>";

$name = isset($_POST['fname']) ? $_POST['fname'] : "No POST fname provided";
echo $name;
echo "<br>";

echo isset($_GET["name"]) ? $_GET["name"] : "No name provided";
echo "<br>";
echo isset($_GET["email"]) ? $_GET["email"] : "No email provided";
?>  

</body>
</html>
