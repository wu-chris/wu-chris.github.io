<!DOCTYPE html>
<html>
<body>

<?php
$cars = array("Volvo", "BMW", "Toyota");
echo count($cars) . "<br>";
unset($cars);

$cars[5] = "Volvo";
$cars[7] = "BMW";
$cars[14] = "Toyota";

array_push($cars, "Ford");
var_dump($cars);

echo "<br>";
$car = array("brand"=>"Ford", "model"=>"Mustang", "year"=>1964);
$car["year"] = 2024;
var_dump($car);
echo "<br>";

$myArr = [];
$myArr[0] = "apples";
$myArr[1] = "bananas";
$myArr["fruit"] = "cherries";

var_dump($myArr);
echo "<br>";

$myCar = [
  "brand" => "Ford",
  "model" => "Mustang",
  "year" => 1964
];

var_dump($myCar);
echo "<br>";

$cars = [
  "Volvo",
  "BMW",
  "Toyota"
];
var_dump($cars);
echo "<br>";

function myFunction() {
  echo "I come from a function!";
}

$myArr = array("car" => "Volvo", "age" => 15, "message" => "myFunction");
call_user_func($myArr["message"]); 
echo "<br>";

$car = array("brand"=>"Ford", "model"=>"Mustang", "year"=>1964);

foreach ($car as $x => $y) {
  echo "$x: $y <br>";
}

echo "<br>";
$cars = array("Volvo", "BMW", "Toyota");
foreach ($cars as $x) {
  echo "$x <br>";
}

echo "<br>";
$cars = array("brand" => "Ford", "model" => "Mustang");
$cars["color"] = "Red";
$cars += ["color" => "red", "year" => 1964];
array_push($cars,["type" => "Hybrid"]);
var_dump($cars);
echo "<br>";
array_splice($cars, 0, 1);
unset($cars[0]);
var_dump($cars);
echo "<br>";
$cars = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);
$newarray = array_diff($cars, ["Mustang", 1964]);
var_dump($newarray);
echo "<br>";
$cars = array("Volvo", "BMW", "Toyota");
array_pop($cars);
var_dump($cars);
echo "<br>";
$cars = array("Volvo", "BMW", "Toyota");
array_shift($cars);
var_dump($cars);
echo "<br>";
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
asort($age);

foreach($age as $x => $x_value) {
  echo "Key=" . $x . ", Value=" . $x_value;
  echo "<br>";
}
echo "<br>";
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
krsort($age);

foreach($age as $x => $x_value) {
  echo "Key=" . $x . ", Value=" . $x_value;
  echo "<br>";
}
echo "<br>";
$cars = array (
  array("Volvo",22,18),
  array("BMW",15,13),
  array("Saab",5,2),
  array("Land Rover",17,15)
);
    
for ($row = 0; $row < 4; $row++) {
  echo "<p><b>Row number $row</b></p>";
  echo "<ul>";
  for ($col = 0; $col < 3; $col++) {
    echo "<li>".$cars[$row][$col]."</li>";
  }
  echo "</ul>";
}
echo "<br>";
?>

</body>
</html>
