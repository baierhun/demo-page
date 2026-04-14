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
