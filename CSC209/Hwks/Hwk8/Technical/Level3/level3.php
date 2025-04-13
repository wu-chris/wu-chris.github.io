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
       $selectedImage = isset($_GET['selectedImage']) ? $_GET['selectedImage'] : '';
    ?> 
    <h1><?php echo $weekNr !== null ? "This is work for Level $weekNr" : "Week number could not be determined"; ?></h1>
    <form method="get">
        <label for="selectedImage">Select an image:</label>
        <select name="selectedImage" id="selectedImage" onchange="this.form.submit()">
            <option value="">-- Show All --</option>
            <?php
                foreach ($imagePaths as $path) {
                    $filename = basename($path);
                    echo '<option value="' . htmlspecialchars($filename) . '"';
                    if ($selectedImage === $filename) {
                        echo ' selected';
                    }
                    echo '>' . htmlspecialchars($filename) . '</option>';
                }
            ?>
        </select>
        <noscript><input type="submit" value="Submit"></noscript> <!-- fallback submit button if no JS -->
    </form>

    <div id="imageContainer">
        <?php
            foreach ($imagePaths as $path){
                $filename = basename($path);
                echo '<img src="' . htmlspecialchars($path) . '" width="300" ' 
                    . (($selectedImage && $selectedImage !== $filename) ? 'hidden' : '') 
                    . '>';
            }
        ?>
    </div>
    </div>

</body>
</html>
