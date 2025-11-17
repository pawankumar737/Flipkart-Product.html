const display = document.getElementById("display");

function insert(value) {
  display.value += value;
  playClick();
}

function clearDisplay() {
  display.value = "";
  playClick();
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
  playClick();
}

function calculate() {
  try {
    let result = eval(display.value.replace("÷", "/").replace("×", "*"));
    if (result === Infinity || isNaN(result)) {
      display.value = "Error";
    } else {
      display.value = result;
      localStorage.setItem("lastCalc", result);
    }
    playEqual();
  } catch (e) {
    display.value = "Error";
  }
}

// Optional: restore last calculation
window.onload = () => {
  const last = localStorage.getItem("lastCalc");
  if (last) display.value = last;
};

// Sound effects
function playClick() {
  const sound = new Audio("click.mp3");
  sound.volume = 0.2;
  sound.play();
}

function playEqual() {
  const sound = new Audio("equal.mp3");
  sound.volume = 0.4;
  sound.play();
}
