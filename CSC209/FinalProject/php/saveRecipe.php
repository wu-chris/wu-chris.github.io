<?php
header("Content-Type: application/json");

$title = $_POST['title'];
$ingredients = isset($_POST['ingredients']) ? json_decode($_POST['ingredients'], true) : [];
$instructions = $_POST['instructions'] ?? '';
$imagePath = '';
$textContent = '';
$username = $_POST['username'] ?? 'Anonymous';

if (!is_dir('../output')) {
    mkdir('../output', 0755, true);
}
if (!is_dir('../images')) {
    mkdir('../images', 0755, true);
}

if (isset($_FILES['image']) && $_FILES['image']['error'] === 0) {
    $imageName = uniqid() . '_' . basename($_FILES['image']['name']);
    $targetPath = '../images/' . $imageName;
    if (move_uploaded_file($_FILES['image']['tmp_name'], $targetPath)) {
        $imagePath = 'images/' . $imageName;
    }
}

if (isset($_FILES['textFile']) && $_FILES['textFile']['error'] === 0) {
    $textContent = file_get_contents($_FILES['textFile']['tmp_name']);
    $instructions .= "\\n" . $textContent;
}


$filename = '../output/recipes.json';
$recipes = [];

if (file_exists($filename)) {
    $json = file_get_contents($filename);
    $recipes = json_decode($json, true);
}


$recipes[] = [
    'title' => $title,
    'ingredients' => $ingredients,
    'instructions' => $instructions,
    'image' => $imagePath,
    'user' => $username
];


file_put_contents($filename, json_encode($recipes, JSON_PRETTY_PRINT));
echo json_encode(["success" => true, "message" => "Recipe saved successfully."]);
?>
