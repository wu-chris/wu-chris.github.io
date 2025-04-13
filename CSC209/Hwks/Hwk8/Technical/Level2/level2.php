<!DOCTYPE html>
<html lang="en">
<head>
    <title>Where Am I?</title>
</head>
<body>
    <?php
       include 'php/myLib.php';
       $currentPath = realpath(dirname(__FILE__));
       $weekNr = extractFolderNumber($currentPath);
       $imagePaths = glob("Images/img*.jpg");
    ?> 
    <h1><?php echo $weekNr !== null ? "This is work for Level $weekNr" : "Week number could not be determined"; ?></h1>
    <div id="imageContainer">
    <?php
        foreach ($imagePaths as $path) {
            echo '<img src="' . htmlspecialchars($path) . '" width="300">';
        }
    ?>
    </div>

</body>
</html>
