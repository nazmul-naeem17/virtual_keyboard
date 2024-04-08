const buttons = document.querySelectorAll(".btn");
const textarea = document.querySelector("textarea");
const delete_btn = document.querySelector(".delete");
const shift_btn = document.querySelector(".shift");
const space_btn = document.querySelector(".space");
const capsLockBtn = document.querySelector(".caps-lock");
const tabBtn = document.querySelector(".tab");
const ctrlBtn = document.querySelector(".ctrl");
let chars = [];
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    textarea.value += btn.innerText;
    chars = textarea.value.split("");
  });
});
delete_btn.addEventListener("click", () => {
  chars.pop();
  textarea.value = chars.join("");
});
space_btn.addEventListener("click", () => {
  chars.push(" ");
  textarea.value = chars.join("");
});
let isShiftPressed = false;
shift_btn.addEventListener("click", () => {
  isShiftPressed = !isShiftPressed;
  buttons.forEach((btn) => {
    if (isShiftPressed) {
      btn.classList.add("upper");
    } else {
      btn.classList.remove("upper");
    }
  });
});
capsLockBtn.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.classList.toggle("upper");
  });
});
tabBtn.addEventListener("click", () => {
  textarea.value += "\t";
});
ctrlBtn.addEventListener("click", () => {
  textarea.select();
});
