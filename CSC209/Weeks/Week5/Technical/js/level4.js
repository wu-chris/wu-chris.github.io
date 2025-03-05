const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function drawCircleWithLine(x, y, color) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.lineWidth = 4;
    ctx.strokeStyle = color;
    ctx.stroke();

    let angle = Math.random() * 2 * Math.PI;
    let lineX = x + 20 * Math.cos(angle);
    let lineY = y + 20 * Math.sin(angle);
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(lineX, lineY);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function generateRandomLocations() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let n = Math.floor(Math.random() * 10) + 1;
    for(let i = 0; i < n; i++){
        let color = getRandomColor();
        let point = { x: Math.random() * 450 + 25, y: Math.random() * 450 + 25, color: color };
        drawCircleWithLine(point.x, point.y, point.color);
    }
}

generateRandomLocations();