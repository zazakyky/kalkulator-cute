function playClick() {
  const clickSound = document.getElementById("clickSound");
  clickSound.currentTime = 0;
  clickSound.play();
}

function append(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById("display");
  const mode = document.getElementById("mode").value;
  let input = display.value;

  try {
    if (mode === "binary") {
      display.value = parseInt(eval(input)).toString(2);
    } else if (mode === "hex") {
      display.value = parseInt(eval(input)).toString(16).toUpperCase();
    } else if (mode === "toDec") {
      if (/^[01]+$/.test(input)) {
        display.value = parseInt(input, 2).toString(10);
      } else {
        display.value = parseInt(input, 16).toString(10);
      }
    } else {
      display.value = eval(input);
    }
  } catch (e) {
    display.value = "Error!";
  }
}

function changeMode() {
  clearDisplay();
}

function showConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}
