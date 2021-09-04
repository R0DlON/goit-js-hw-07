const inputEl = document.querySelector("#validation-input");
console.log(inputEl);

console.log(inputEl.value.length);
console.log(inputEl.dataset.length);

// function add(event, name) {
//   event.classList.add(name);
// }
// console.log(add(inputEl, "newClass"));
function qaOfLetters(event) {
  if (event.currentTarget.value.length === event.dataset.length) {
    return event.classList.add(".validation - input.valid");
  }
  return event.classList.add(".validation - input.invalid");
}
inputEl.addEventListener("change", qaOfLetters);
// function qaOfLetters(event) {
//   const inputEl = document.querySelector("#validation-input");

//   if (event.value.length === inputEl.dataset.length) {
//     add(event, ".validation-input.valid");
//   }
//   return inputEl.classList.add(".validation - input.invalid");
// }
