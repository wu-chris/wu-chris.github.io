function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function drawCircleWithLine(point) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 10, 0, 2 * Math.PI);
    ctx.lineWidth = 4;
    ctx.strokeStyle = point.color;
    ctx.stroke();
    
    let lineX = point.x + 20 * Math.cos(point.angle);
    let lineY = point.y + 20 * Math.sin(point.angle);
    
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    ctx.lineTo(lineX, lineY);
    ctx.strokeStyle = point.color;
    ctx.stroke();
}


function generateRandomLocations() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let points = [];
    for (let i = 0; i < numPoints; i++) {
        points.push({
            x: Math.random() * 450 + 25,
            y: Math.random() * 450 + 25,
            angle: Math.random() * 2 * Math.PI,
            color: getRandomColor()
        });
    }
    points.forEach(drawCircleWithLine);
}
