const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;

    if (btn.classList.contains("clear")) {
      currentInput = "";
      display.value = "";
    } else if (btn.id === "equal") {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
