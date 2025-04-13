<?php
    include 'php/myLib.php'; 
    $images = loadImage();
    $captions = array_map(function($image) {
        return basename($image, ".jpg"); 
    }, $images);
    $NRImages = count($images);
    $slideIndex = isset($_GET['slide']) ? intval($_GET['slide']) : 1;
    if ($slideIndex < 1) $slideIndex = $NRImages;
    if ($slideIndex > $NRImages) $slideIndex = 1;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Image Slideshow</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <?php
       $currentPath = realpath(dirname(__FILE__));
       $weekNr = extractFolderNumber($currentPath);
       $imagePaths = glob("Images/img*.jpg");
    ?> 
    <h1><?php echo $weekNr !== null ? "This is work for Level $weekNr" : "Week number could not be determined"; ?></h1>
<br>
<div class="slideshow-container">
    <div class="mySlides fade">
        <div class="numbertext"><?php echo $slideIndex . ' / ' . $NRImages; ?></div>
        <img src="<?php echo $images[$slideIndex-1]; ?>" style="width:70%; max-width:700px; display:block; margin:auto;">
        <div class="text"><?php echo $captions[$slideIndex-1]; ?></div>
    </div>
    <a class="prev" href="?slide=<?php echo ($slideIndex - 1 < 1) ? $NRImages : ($slideIndex - 1); ?>">&#10094;</a>
    <a class="next" href="?slide=<?php echo ($slideIndex + 1 > $NRImages) ? 1 : ($slideIndex + 1); ?>">&#10095;</a>
</div>


<div style="text-align:center; margin-top:10px;">
<?php
for ($i = 1; $i <= $NRImages; $i++) {
    $activeClass = ($i == $slideIndex) ? "active" : "";
    echo '<a href="?slide=' . $i . '"><span class="dot ' . $activeClass . '"></span></a> ';
}
?>
</div>
</body>
</html>
