const inputEl = document.querySelector("#validation-input");
// console.log(inputEl);

console.log(inputEl.value.length);
console.log(inputEl.dataset.length);

// function add(event, name) {
//   event.classList.add(name);
// }
// console.log(add(inputEl, "newClass"));
function qaOfLetters(event) {
  console.log(event.currentTarget.value.length);
  const trueString = document.querySelector(".valid");
  const falseString = document.querySelector(".invalid");
  if (trueString) {
    trueString.classList.remove("valid");
  }
  if (falseString) {
    falseString.classList.remove("invalid");
  }

  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    return event.currentTarget.classList.add("valid");
  }
  return event.currentTarget.classList.add("invalid");
}
inputEl.addEventListener("change", qaOfLetters);
// function qaOfLetters(event) {
//   const inputEl = document.querySelector("#validation-input");

//   if (event.value.length === inputEl.dataset.length) {
//     add(event, ".validation-input.valid");
//   }
//   return inputEl.classList.add(".validation - input.invalid");
// }
