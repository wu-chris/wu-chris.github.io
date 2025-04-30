<?php
$filename = "../output/recipes.json";
$recipes = file_exists($filename) ? json_decode(file_get_contents($filename), true) : [];
echo json_encode($recipes);
?>
