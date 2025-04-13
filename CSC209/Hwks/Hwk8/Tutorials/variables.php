<!DOCTYPE html>
<html>
<body>

<pre>

<?php
$x = 5;      // $x is an integer
$y = "John"; // $y is a string

echo $x;
echo $y;
var_dump(5);
var_dump("John");
var_dump(3.14);
var_dump(true);
var_dump([2, 3, 56]);
var_dump(NULL);

$z = 5;
$k = 10;

function myTest() {
  $GLOBALS['k'] = $GLOBALS['z'] + $GLOBALS['k'];
} 

myTest();
echo $k;
?>

</pre>

</body>
</html>
