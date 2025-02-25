function moveRed() {   
    var redSquare = document.getElementById("redSq");   
    var speed = parseInt(document.getElementById("redSpeed").value); // Get the selected speed
    var redPosX = 0;
    var redPosY = 0;

    clearInterval(redSquare.dataset.intervalId); // Clear any ongoing animation if any

    var stepRedId = setInterval(function () {
        if (redPosX == 350 && redPosY == 350) {
            clearInterval(stepRedId);
        } else {
            redPosX++; 
            redPosY++;
            redSquare.style.top = redPosY + 'px'; 
            redSquare.style.left = redPosX + 'px';
        }
    }, speed);//move diagonally with the certain speed as selected
    redSquare.dataset.intervalId = stepRedId; 
}

function moveBlue() {   
    var blueSquare = document.getElementById("blueSq");   
    var speed = parseInt(document.getElementById("blueSpeed").value); // Get the selected speed
    var bluePosX = 350;
    var bluePosY = 350;

    clearInterval(blueSquare.dataset.intervalId); // Clear any ongoing animation if any

    var stepBlueId = setInterval(function () {
        if (bluePosX == 0 && bluePosY == 0) {
            clearInterval(stepBlueId);
        } else {
            bluePosX--; 
            bluePosY--;
            blueSquare.style.top = bluePosY + 'px'; 
            blueSquare.style.left = bluePosX + 'px';
        }
    }, speed);//move diagonally with the certain speed as selected
    blueSquare.dataset.intervalId = stepBlueId; 
}
