const inputEl = document.querySelector("#name-input");
console.log(inputEl);

const spanEl = document.querySelector("#name-output");
console.log(spanEl.textContent);

inputEl.addEventListener("input", changeName);

function changeName(event) {
  if ((event.value = "")) {
    return (spanEl.textContent = "незнакомец");
  }
  return (spanEl.textContent = event.currentTarget.value);
}
