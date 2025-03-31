<!DOCTYPE html>
<html>
<body>

<?php
$t = 14;

if ($t < 20) {
  echo "Have a good day!" . "<br>";
}
if ($t == 14) {
  echo "Have a good day!". "<br>";
}
elseif ($t < 14) {
  echo "Have a good day!". "<br>";
} else {
  echo "Have a good night!". "<br>";
}
$a = 5;

if ($a < 10) $b = "Hello". "<br>";

echo $b;

$a = 15;

$b = $a < 10 ? "Hello". "<br>" : "Good Bye". "<br>";

echo $b;
$a = 13;

if ($a > 10) {
  echo "Above 10". "<br>";
  if ($a > 20) {
    echo " and also above 20". "<br>";
  } else {
    echo " but not above 20". "<br>";
  }
}
?>
 
</body>
</html>