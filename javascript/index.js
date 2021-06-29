function openSignupForm() {
    document.getElementById("SignUpForm").style.display = "block";
}

function closeSignupForm() {
    document.getElementById("SignUpForm").style.display = "none";
}

function openloginForm() {
    document.getElementById("LoginForm").style.display = "block";
}

function closeloginForm() {
    document.getElementById("LoginForm").style.display = "none";
}

function openmenu() {
    var x = document.getElementById("hamburger-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}