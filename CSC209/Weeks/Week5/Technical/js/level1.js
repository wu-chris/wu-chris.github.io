const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(95, 50, 10, 0, 2 * Math.PI);
ctx.lineWidth = 4;
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(95,50);
ctx.lineTo(110,75);
ctx.strokeStyle = "green";
ctx.stroke();