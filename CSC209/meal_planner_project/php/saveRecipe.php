<?php
$data = json_decode(file_get_contents('php://input'), true);
$filename = "../output/recipes.json";
$existing = [];

if (file_exists($filename)) {
    $existing = json_decode(file_get_contents($filename), true);
}

$existing[] = $data;
file_put_contents($filename, json_encode($existing, JSON_PRETTY_PRINT));
echo json_encode(["message" => "Recipe saved successfully"]);
?>
