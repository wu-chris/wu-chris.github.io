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
       $imagePaths = json_encode(glob("Images/img*.jpg"));
    ?> 
    <h1><?php echo $weekNr !== null ? "This is work for Level $weekNr" : "Week number could not be determined"; ?></h1>
    <div id="imageContainer"></div>
    <script>
        const imagePaths = <?php echo $imagePaths; ?>;
        imagePaths.forEach(path => {
            const img = document.createElement("img");
            img.src = path;
            img.width = 300;
            document.getElementById("imageContainer").appendChild(img);
        });
    </script>
</body>
</html>
