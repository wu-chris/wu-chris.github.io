
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
    lastPositions = [];
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
        reset.push({ ...point });
        lastPositions.push({ x: point.x, y: point.y }); 
    }
    points.forEach(point => drawCircleWithLine(point));
    if (document.getElementById("traceCheckbox").checked) {
        let outputText = "<h3>Last and Current Positions:</h3><ul>";
        for (let i = 0; i < points.length; i++) {
            outputText += `<li>Point ${i + 1}: Last -> (${points[i].x.toFixed(2)}, ${points[i].y.toFixed(2)}) | Current -> (${points[i].x.toFixed(2)}, ${points[i].y.toFixed(2)})</li>`;
        }
        outputText += "</ul>";
        positionsOutput.innerHTML = outputText;
    }
}

function animateMotion() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let point of points) {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x <= 10 || point.x >= 490) point.vx *= -1;
        if (point.y <= 10 || point.y >= 490) point.vy *= -1;

        drawCircleWithLine(point);
    }
    if (document.getElementById("traceCheckbox").checked) {
        let outputText = "<h3>Last and Current Positions:</h3><ul>";
        for (let i = 0; i < points.length; i++) {
            outputText += `<li>Point ${i + 1}: Last -> (${lastPositions[i].x.toFixed(2)}, ${lastPositions[i].y.toFixed(2)}) | Current -> (${points[i].x.toFixed(2)}, ${points[i].y.toFixed(2)})</li>`;
        }
        outputText += "</ul>";
        positionsOutput.innerHTML = outputText;
    }
    animationFrameId = requestAnimationFrame(animateMotion);
}

function resetAnimation() {
    animationRunning = false; 
    points = reset.map(point => ({ ...point })); 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    points.forEach(point => drawCircleWithLine(point)); 
    if (document.getElementById("traceCheckbox").checked) {
        let outputText = "<h3>Last and Current Positions:</h3><ul>";
        for (let i = 0; i < points.length; i++) {
            outputText += `<li>Point ${i + 1}: Last -> (${points[i].x.toFixed(2)}, ${points[i].y.toFixed(2)}) | Current -> (${points[i].x.toFixed(2)}, ${points[i].y.toFixed(2)})</li>`;
        }
        outputText += "</ul>";
        positionsOutput.innerHTML = outputText;
    }
    cancelAnimationFrame(animationFrameId);
}
