
function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function drawCircleWithLine(point) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 10, 0, 2 * Math.PI);
    ctx.lineWidth = 4;
    ctx.strokeStyle = point.color;
    ctx.stroke();
    
    let lineX = point.x + 10 * point.vx;
    let lineY = point.y + 10 * point.vy;
    
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    ctx.lineTo(lineX, lineY);
    ctx.strokeStyle = point.color;
    ctx.stroke();
}

function generateRandomLocations() {
    points = [];
    reset = []; 
    stepCount = 0; 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const NRPTS = parseInt(document.getElementById("numPoints").value) || 5;
    for (let i = 0; i < NRPTS; i++) {
        let angle = Math.random() * 2 * Math.PI;
        let point = {
            x: Math.random() * 450 + 25,
            y: Math.random() * 450 + 25,
            angle: angle,
            color: getRandomColor(),
            vx: speed * Math.cos(angle),
            vy: speed * Math.sin(angle)
        };
        points.push(point);
        resetAnimation
        reset.push({ ...point }); 
    }
    points.forEach(point => drawCircleWithLine(point));
}

function animateMotion() {
    if (stepCount >= NRSTEPS) {
        animationRunning = false;
        return; 
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let point of points) {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x <= 10 || point.x >= 490) point.vx *= -1;
        if (point.y <= 10 || point.y >= 490) point.vy *= -1;

        drawCircleWithLine(point);
    }
    stepCount++;
    requestAnimationFrame(animateMotion);
}

function resetAnimation() {
    animationRunning = false; 
    stepCount = 0; 
    points = reset.map(point => ({ ...point })); 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    points.forEach(point => drawCircleWithLine(point)); 
}
