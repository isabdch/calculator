// get HTML element
let screen = document.querySelector("h1");
let inScreen = document.querySelector("#inScreen");

// functions
function clearScreen() {
  screen.innerHTML = "";
  inScreen.innerHTML = "";
}

function deleteScreen() {
  screen.innerHTML = screen.innerHTML.slice(0, -1);
  
  if (eval(screen.innerHTML) == undefined) {
    inScreen.innerHTML = "";
  } else {
    inScreen.innerHTML = eval(screen.innerHTML);
  }
}

function updateScreen(element) {
  screen.innerHTML += element.innerHTML;
  inScreen.innerHTML = eval(screen.innerHTML);
}

function showResult() {
  screen.innerHTML = eval(screen.innerHTML);
  inScreen.innerHTML = "";
}
