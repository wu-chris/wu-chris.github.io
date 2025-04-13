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
       $path1 = '../Images/img1.jpg';
       $path2 = '../Images/img2.jpg';
       $path3 = '../Images/img3.jpg';
    ?> 
    <h1><?php echo $weekNr !== null ? "This is work for Week $weekNr" : "Week number could not be determined"; ?></h1>
</body>
</html>
