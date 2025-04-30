<?php
header("Content-Type: application/json");

if (!isset($_POST['username']) || !isset($_FILES['photo'])) {
    echo json_encode(["success" => false, "message" => "Missing data"]);
    exit;
}

$username = preg_replace("/[^a-zA-Z0-9_-]/", "_", $_POST['username']); // sanitize for file safety
$photo = $_FILES['photo'];

if ($photo['error'] !== 0) {
    echo json_encode(["success" => false, "message" => "File upload error."]);
    exit;
}

$extension = pathinfo($photo['name'], PATHINFO_EXTENSION);
$targetDir = "../images/profiles";
if (!is_dir($targetDir)) {
    mkdir($targetDir, 0755, true);
}

$targetFilename = $targetDir . "/" . $username . "." . $extension;
$webPath = "images/profiles/" . $username . "." . $extension;

if (move_uploaded_file($photo['tmp_name'], $targetFilename)) {
    echo json_encode(["success" => true, "photoPath" => $webPath]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to move uploaded file."]);
}
?>
