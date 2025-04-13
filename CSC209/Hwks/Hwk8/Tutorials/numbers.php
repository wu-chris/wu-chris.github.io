<!DOCTYPE html>
<html>
<body>

<?php
$a = 5;
$b = 5.34;
$c = "25";

var_dump($a);
echo "<br>";
var_dump($b);
echo "<br>";
var_dump($c);

echo "<br>";
var_dump(is_int($a));
echo "<br>";
var_dump(is_int($b));
echo "<br>";
var_dump(is_float($b));
echo "<br>";

$x = 1.9e411;
var_dump($x);
echo "<br>";

$x = acos(8);
var_dump($x);
echo "<br>";
$x = 5985;
var_dump(is_numeric($x));

echo "<br>";

$x = "5985";
var_dump(is_numeric($x));

echo "<br>";

$x = "59.85" + 100;
var_dump(is_numeric($x));

echo "<br>";

$x = "Hello";
var_dump(is_numeric($x));

echo "<br>";

$x = 23465.768;
$int_cast = (int)$x;
echo $int_cast;

echo "<br>";

// Cast string to int
$x = "23465.768";
$int_cast = (int)$x;
echo $int_cast;

?> 

<p>Line breaks were added for better readability.</p>

</body>
</html>
