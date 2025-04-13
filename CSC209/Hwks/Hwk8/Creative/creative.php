<?php
    include 'php/myLib.php'; 
    $folders = array_filter(glob("Images/*"), 'is_dir');
    $folders = array_map(function($folder) {
        return basename($folder); 
    }, $folders);

    $selectedFolder = isset($_GET['folder']) ? $_GET['folder'] : 'people';
    $imagePaths = glob("Images/$selectedFolder/*.{jpg,JPG,jpeg,JPEG}", GLOB_BRACE);
    $captions = array_map(function($image) {
        return basename($image, ".jpg"); 
    }, $imagePaths);
    
    $NRImages = count($imagePaths);

    $slideIndex = isset($_GET['slide']) ? intval($_GET['slide']) : 1;
    if ($slideIndex < 1 || $slideIndex > $NRImages) {
        $slideIndex = 1; 
    }
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
    ?> 
    <h1><?php echo $weekNr !== null ? "This is work for Level $weekNr" : "Week number could not be determined"; ?></h1>
    <br>

    <!-- Folder Selection Menu -->
    <form action="" method="GET">
        <label for="folder">Select a Folder: </label>
        <select name="folder" id="folder" onchange="this.form.submit()">
            <?php
                foreach ($folders as $folder) {
                    echo "<option value=\"$folder\" " . ($selectedFolder === $folder ? 'selected' : '') . ">$folder</option>";
                }
            ?>
        </select>
    </form>
    
    <br>

    <div class="slideshow-container">
        <?php if ($NRImages > 0): ?>
            <div class="mySlides fade">
                <div class="numbertext"><?php echo $slideIndex . ' / ' . $NRImages; ?></div>
                <img src="<?php echo $imagePaths[$slideIndex - 1]; ?>" style="width:70%; max-width:700px; display:block; margin:auto;">
                <div class="text"><?php echo $captions[$slideIndex - 1]; ?></div>
            </div>
        <?php else: ?>
            <p>No images available in this folder.</p>
        <?php endif; ?>
    </div>

    <a class="prev" href="?folder=<?php echo $selectedFolder; ?>&slide=<?php echo ($slideIndex - 1 < 1) ? $NRImages : ($slideIndex - 1); ?>">&#10094;</a>
    <a class="next" href="?folder=<?php echo $selectedFolder; ?>&slide=<?php echo ($slideIndex + 1 > $NRImages) ? 1 : ($slideIndex + 1); ?>">&#10095;</a>

    <div style="text-align:center; margin-top:10px;">
        <?php
        for ($i = 1; $i <= $NRImages; $i++) {
            $activeClass = ($i == $slideIndex) ? "active" : "";
            echo '<a href="?folder=' . $selectedFolder . '&slide=' . $i . '"><span class="dot ' . $activeClass . '"></span></a> ';
        }
        ?>
    </div>
</body>
</html>
