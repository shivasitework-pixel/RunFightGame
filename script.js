// ===============================
// RUN FIGHT GAME
// script.js
// ===============================

let coins = 0;
let progress = 10;
let running = false;

const coinText = document.getElementById("coin");
const bar = document.getElementById("bar");
const popup = document.getElementById("popup");

const player = document.querySelector(".player");

const startBtn = document.getElementById("startBtn");
const fightBtn = document.getElementById("fightBtn");
const rewardBtn = document.getElementById("rewardBtn");


// --------------------
// Start Game
// --------------------

startBtn.addEventListener("click", function () {

    running = true;

    alert("Game Started!");

});


// --------------------
// Fight Button
// --------------------

fightBtn.addEventListener("click", function () {

    if (!running) {

        alert("Start the game first!");

        return;

    }

    coins += 50;

    progress += 20;

    updateUI();

});



// --------------------
// Reward Button
// --------------------

rewardBtn.addEventListener("click", function () {

    coins += 100;

    updateUI();

    alert("Reward Collected!");

});




// --------------------
// Update UI
// --------------------

function updateUI() {

    coinText.innerHTML = coins;

    if (progress > 100)
        progress = 100;

    bar.style.width = progress + "%";

    if (progress >= 100) {

        popup.style.display = "flex";

    }

}



// --------------------
// Close Popup
// --------------------

function closePopup() {

    popup.style.display = "none";

    progress = 10;

    coins += 200;

    updateUI();

}



// --------------------
// Keyboard Controls
// --------------------

let x = 70;
let y = 0;

document.addEventListener("keydown", function (e) {

    if (!running)
        return;

    if (e.key === "ArrowRight")
        x += 20;

    if (e.key === "ArrowLeft")
        x -= 20;

    if (e.key === "ArrowUp")
        y -= 20;

    if (e.key === "ArrowDown")
        y += 20;

    player.style.left = x + "px";

    player.style.top = y + "px";

});




// --------------------
// Auto Coin System
// --------------------

setInterval(function () {

    if (!running)
        return;

    coins++;

    updateUI();

}, 1000);




// --------------------
// Simple Enemy Fight
// --------------------

const enemy = document.querySelector(".enemy");

enemy.addEventListener("click", function () {

    if (!running)
        return;

    coins += 25;

    progress += 10;

    updateUI();

    enemy.style.display = "none";

});




// --------------------
// Boss Fight
// --------------------

const boss = document.querySelector(".boss");

boss.addEventListener("click", function () {

    if (!running)
        return;

    coins += 200;

    progress = 100;

    updateUI();

});




// --------------------
// Treasure Chest
// --------------------

const chest = document.querySelector(".chest");

chest.addEventListener("click", function () {

    if (!running)
        return;

    coins += 500;

    updateUI();

    chest.style.display = "none";

});
