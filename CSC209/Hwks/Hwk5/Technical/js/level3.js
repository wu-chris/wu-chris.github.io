
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
    
    let point1 = { x: Math.random() * 450 + 25, y: Math.random() * 200 + 25, color: "green" };
    let point2 = { x: Math.random() * 450 + 25, y: Math.random() * 200 + 25, color: "blue" };
    let point3 = { x: Math.random() * 450 + 25, y: Math.random() * 200 + 250, color: "orange" };

    drawCircleWithLine(point1.x, point1.y, point1.color);
    drawCircleWithLine(point2.x, point2.y, point2.color);
    drawCircleWithLine(point3.x, point3.y, point3.color);
}

