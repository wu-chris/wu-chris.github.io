<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Where Am I?</title>
</head>
<body>
    <h1>This page figures out its whereabouts</h1>
    
    <?php
        $currentPath = realpath(dirname(__FILE__));
        $folderName = basename($currentPath);
        $weekNrString = substr($folderName, -1);
        if (ctype_digit($weekNrString)) {
            $weekNr = (int)$weekNrString;
        } else {
            $weekNr = "Invalid week number";
        }
    ?>
    
    <p>My week number is <?php echo $weekNr; ?></p>
</body>
</html>
