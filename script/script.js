// get HTML element
let screen = document.querySelector("h1");

// functions
function clearScreen() {
  screen.innerHTML = "";
}

function deleteScreen() {
  screen.innerHTML = screen.innerHTML.slice(0, -1);
}

function updateScreen(element) {
  screen.innerHTML += element.innerHTML;
}

function showResult() {
  screen.innerHTML = eval(screen.innerHTML);
}
