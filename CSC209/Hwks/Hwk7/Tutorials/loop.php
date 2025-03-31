<!DOCTYPE html>
<html>
<body>

<?php  
$i = 1;

while ($i < 6) {
  if ($i == 3) break;  
  echo $i;
  $i++;
} 
echo "<br>";
$i = 0;
while ($i < 6) {
  $i++;
  if ($i == 3) continue;
  echo $i;
}
echo "<br>";
$i = 1;
while ($i < 6):
  echo $i;
  $i++;
endwhile;
$i = 0;
while ($i < 100) {
  $i+=10;
  echo $i;
}
echo "<br>";
$i = 0;

do {
  $i++;
  if ($i == 3) continue;
  echo $i;
} while ($i < 6);

for ($x = 0; $x <= 10; $x++) {
  if ($x == 3) continue;
  echo "The number is: $x <br>";
}
class Car {
  public $color;
  public $model;
  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
}

$myCar = new Car("red", "Volvo");

foreach ($myCar as $x => $y) {
  echo "$x: $y <br>";
}



?>  

</body>
</html>
