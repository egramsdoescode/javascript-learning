let clicks = 0;
let countdown = 10;

function updateUI() {
    document.getElementById("timer").textContent = `Time left: ${countdown}`;
    document.getElementById("counter").textContent = `Clicks: ${clicks}`;
}

function tick() {
    countdown--;
    if (countdown <= 0) {
        countdown = 10;
        clicks = 0;
    }
    updateUI();
}

function onClick() {
    clicks++;
    updateUI();
}

function onStart() {
    document.getElementById("clickButton").disabled = false;
    document.getElementById("startButton").disabled = true;
    setInterval(() => {
        tick();
    }, 1000);
}

document.getElementById("startButton").addEventListener("click", onStart);
document.getElementById("clickButton").addEventListener("click", onClick);
document.getElementById("clickButton").disabled = true;
