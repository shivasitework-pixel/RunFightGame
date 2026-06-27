// ===========================
// Player System
// ===========================

const player = document.querySelector(".player");

let playerX = 70;
let playerY = 0;
let speed = 20;

function updatePlayer() {
    player.style.left = playerX + "px";
    player.style.top = playerY + "px";
}

document.addEventListener("keydown", (e) => {

    switch(e.key){

        case "ArrowRight":
            playerX += speed;
            break;

        case "ArrowLeft":
            playerX -= speed;
            break;

        case "ArrowUp":
            playerY -= speed;
            break;

        case "ArrowDown":
            playerY += speed;
            break;

    }

    if(playerX < 0) playerX = 0;
    if(playerY < 0) playerY = 0;

    updatePlayer();

});

// Touch Support

let startX = 0;
let startY = 0;

document.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;

});

document.addEventListener("touchmove",(e)=>{

    let moveX = e.touches[0].clientX;
    let moveY = e.touches[0].clientY;

    if(moveX > startX) playerX += 5;
    if(moveX < startX) playerX -= 5;

    if(moveY > startY) playerY += 5;
    if(moveY < startY) playerY -= 5;

    updatePlayer();

});
