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
function loadImage(){
    $images = glob("Images/*/*.jpg");
    return $images;
}

function showSlide($slideIndex) {
    $images = getImageList();
    $totalSlides = count($images);

    if ($totalSlides === 0) {
        echo "<p>No images found.</p>";
        return;
    }


    $slideIndex = ($slideIndex < 1) ? $totalSlides : $slideIndex;
    $slideIndex = ($slideIndex > $totalSlides) ? 1 : $slideIndex;


    $currentImage = $images[$slideIndex - 1];
    echo "<div class='slide'>";
    echo "<img src='$currentImage' style='width:65%; max-height:400px;' alt='Slide $slideIndex' />";
    echo "<p>Image $slideIndex of $totalSlides</p>";

    
    $prev = $slideIndex - 1;
    $next = $slideIndex + 1;
    echo "<div class='nav-buttons'>";
    echo "<a href='?slide=$prev' class='button'>&laquo; Prev</a> ";
    echo "<a href='?slide=$next' class='button'>Next &raquo;</a>";
    echo "</div>";
    echo "</div>";
}
?> 