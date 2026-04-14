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
