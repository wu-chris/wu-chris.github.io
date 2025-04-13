<?php
function extractFolderNumber($currentPath) {
    $folderName = basename($currentPath);
    $weekNrString = substr($folderName, -1);
    if (ctype_digit($weekNrString)) {
        return (int)$weekNrString;
    } else {
        return "Invalid week number";
    }
}
 
?> 