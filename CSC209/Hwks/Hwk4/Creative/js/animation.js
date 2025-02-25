document.addEventListener("DOMContentLoaded", function () {
    var squares = [
        { id: "redSq", positionTop: 0, positionLeft: 0, y: 1, x: 1, speedId: "redSpeed", buttonId: "moveRedBtn" },
        { id: "blueSq", positionTop: 350, positionLeft: 350, y: -1, x: -1, speedId: "blueSpeed", buttonId: "moveBlueBtn" },
        { id: "yellowSq", positionTop: 350, positionLeft: 0, y: -1, x: 1, speedId: "yellowSpeed", buttonId: "moveYellowBtn" }, // Fixed here
        { id: "orangeSq", positionTop: 0, positionLeft: 350, y: 1, x: -1, speedId: "orangeSpeed", buttonId: "moveOrangeBtn" } // Fixed here
    ];    
    function moveSquare(squareObj) {
        let square = document.getElementById(squareObj.id);
        let speed = parseInt(document.getElementById(squareObj.speedId).value);
        let positionTop = squareObj.positionTop;
        let positionLeft = squareObj.positionLeft;
        let posy = squareObj.y;
        let posx = squareObj.x;
    
        clearInterval(square.dataset.intervalId); // Clear any ongoing animation
    
        let stepId = setInterval(function () {
            // Stop when the square reaches the boundary
            if ((posy === 1 && positionTop >= 350) || (posy === -1 && positionTop <= 0) || 
                (posx === 1 && positionLeft >= 350) || (posx === -1 && positionLeft <= 0)) {
                clearInterval(stepId);
            } else {
                // Move the square
                positionTop += posy;
                positionLeft += posx;
                square.style.top = positionTop + 'px';
                square.style.left = positionLeft + 'px';
            }
        }, speed); // Move with the selected speed
    
        square.dataset.intervalId = stepId;
    }
    squares.forEach(squareObj => {
        document.getElementById(squareObj.buttonId).addEventListener("click", () => moveSquare(squareObj));
    });

    document.getElementById("moveAllBtn").addEventListener("click", function () {
        squares.forEach(moveSquare);
    });
});
document.getElementById("changeStyleBtn").addEventListener("click", function () {
    var styleSheet = document.getElementById("styleSheet");
    if (styleSheet.getAttribute("href") === "css/style.css") {
        styleSheet.setAttribute("href", "css/newstyle.css");  // Change to another stylesheet
    } else {
        styleSheet.setAttribute("href", "css/style.css");  // Revert back to the original stylesheet
    }
});
