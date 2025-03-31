<!DOCTYPE html>
<html>
<body>

<?php
$x = "   Hello World!  ";
echo "Printed: $x";
echo "<br>";  
echo strlen("Hello world!");
echo "<br>";
echo str_word_count("Hello world!");
echo "<br>";
$x = trim($x);
echo "$x";
echo "<br>";
echo strtoupper($x);
echo "<br>"; 
echo strtolower($x);
echo "<br>"; 
echo str_replace("World", "Dolly", $x);
echo "<br>"; 
echo strrev($x);
echo "<br>"; 
$y = explode(" ", $x);
print_r($y);
echo "<br>"; 
echo "concatinate Strings";
echo "<br>"; 
$x = "Hello";
$y = "World";
$z = $x . $y;
echo $z;
echo "<br>"; 
$z = $x . " " . $y;
echo $z;
echo "<br>"; 
$z = "$x $y";
echo $z;
echo "<br>"; 
$x = "Hello World!";
echo substr($x, 6, 5);
echo "<br>"; 
$x = "Hello World!";
echo substr($x, 6);
echo "<br>"; 
$x = "Hello World!";
echo substr($x, -5, 3);
echo "<br>"; 
$x = "Hi, how are you?";
echo substr($x, 5, -3);
echo "<br>"; 
$x = "We are the so-called \"Vikings\" from the north.";
echo "$x";
echo "<br>"; 
?> 

</body>
</html>
