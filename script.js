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

    // Random horizontal position
    confetti.style.left = Math.random() * window.innerWidth + "px";

    // Random color
    const colors = ["red", "blue", "yellow", "green", "purple"];
    confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

    // Random size
    confetti.style.width = confetti.style.height =
        Math.random() * 8 + 4 + "px";

    document.body.appendChild(confetti);

    // Remove after animation
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}
