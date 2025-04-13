<!DOCTYPE html>
<html>
<body>

<?php
// case-sensitive constant name
define("GREETING", "Welcome to W3Schools.com!");
echo GREETING;
echo "<br>";
const MYCAR = "Volvo";
echo MYCAR;
echo "<br>";
define("cars", [
    "Alfa Romeo",
    "BMW",
    "Toyota"
  ]);
echo cars[0];
echo "<br>";
define("GREET", "Welcome to W3Schools.com!");

function myTest() {
  echo GREET;
}

myTest();
echo "<br>";
echo __FILE__;
echo "<br>";
echo __DIR__;
?> 

</body>
</html>