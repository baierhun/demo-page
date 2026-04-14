// CHANGE TEXT
function changeText() {
    document.getElementById("intro-text").textContent =
        "Now the text has been changed using JavaScript!";
}

// GREET USER
function greetUser() {
    let name = document.getElementById("nameInput").value;

    if (name === "") {
        document.getElementById("greeting").textContent = "Please enter your name!";
    } else {
        document.getElementById("greeting").textContent = "Hello, " + name + "!";
    }
}

// TOGGLE THEME
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// PROJECT BUTTON ALERT
function projectAlert(projectName) {
    alert("You clicked on " + projectName + "!");
}

// CONTACT FORM
function sendMessage() {
    let name = document.getElementById("contactName").value;
    let message = document.getElementById("contactMessage").value;

    if (name === "" || message === "") {
        document.getElementById("response").textContent =
            "Please fill out all fields.";
    } else {
        document.getElementById("response").textContent =
            "Thanks, " + name + "! Your message has been sent.";
    }
}

// KONAMI CODE DETECTION
const konamiCode = [
    "ArrowUp","ArrowUp",
    "ArrowDown","ArrowDown",
    "ArrowLeft","ArrowRight",
    "ArrowLeft","ArrowRight",
    "b","a"
];

let userInput = [];

document.addEventListener("keydown", function(e) {
    userInput.push(e.key);

    // Keep array same length as code
    if (userInput.length > konamiCode.length) {
        userInput.shift();
    }

    // Check if matches
    if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
        launchConfetti();
    }
});

function launchConfetti() {
    for (let i = 0; i < 100; i++) {
        createConfettiPiece();
    }
}

function createConfettiPiece() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // RANDOM START POSITION
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = Math.random() * -100 + "px"; // staggered start heights

    // RANDOM COLOR
    const colors = ["red", "blue", "yellow", "green", "purple"];
    confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

    // RANDOM SIZE
    const size = Math.random() * 8 + 4;
    confetti.style.width = size + "px";
    confetti.style.height = size + "px";

    // RANDOM FALL DURATION
    const duration = Math.random() * 2 + 2; // 2–4 seconds
    confetti.style.animationDuration = duration + "s";

    // RANDOM HORIZONTAL DRIFT
    const drift = (Math.random() - 0.5) * 200; // left/right movement
    confetti.style.setProperty("--drift", drift + "px");

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, duration * 1000);
}
