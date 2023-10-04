const darkTheme = "styles/dark.css"
const lightTheme = "styles/light.css"
const sunIcon = "img/SunIcon.svg";
const moonIcon = "img/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const toast = document.getElementById("toast");


// Swaps the stylesheet to achieve dark mode.
function changeTheme() {
    const theme = document.getElementById("theme");
    setTimeout(() => {
      toast.innerHTML = "Calculator";
    }, 1500);
    if (theme.getAttribute("href") === lightTheme) {
      theme.setAttribute("href", darkTheme);
      themeIcon.setAttribute("src", sunIcon);
      toast.innerHTML = "Dark Mode 🌙";
    } else {
      theme.setAttribute("href", lightTheme);
      themeIcon.setAttribute("src", moonIcon);
      toast.innerHTML = "Light Mode ☀️";
    }
  }


let history = [];
let currentExpression = "";

function appendToScreen(value) {
    currentExpression += value;
    document.getElementById('screen').value = currentExpression;
}

function clearScreen() {
    currentExpression = "";
    document.getElementById('screen').value = currentExpression;
}

function calculate() {
    try {
        const result = eval(currentExpression);
        history.push(currentExpression + " = " + result);
        document.getElementById('history').innerText = history.join('\n');
        currentExpression = result.toString();
        document.getElementById('screen').value = currentExpression;
    } catch (error) {
        currentExpression = "";
        document.getElementById('screen').value = "Error";
    }
}

function backspace() {
    currentExpression = currentExpression.slice(0, -1);
    document.getElementById('screen').value = currentExpression;
}

function appendPercent() {
    currentExpression += '*0.01';
    document.getElementById('screen').value = currentExpression;
}