let img = document.getElementById("animatedImage");
let posX = 0;
let posY = 0;
let speedX = 2; 
let speedY = 1.05; 

function animate() {
    posX += speedX;
    posY += speedY;
    if (posX > window.innerWidth || posY > window.innerHeight) {
        posX = -img.width;
        posY = 0;
    }
  
    img.style.left = posX + "px";
    img.style.top = posY + "px";

    requestAnimationFrame(animate);
}

animate();