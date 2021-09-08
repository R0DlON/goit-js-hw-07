const valueEl = document.querySelector("#value");
let value = 0;
console.log(valueEl.textContent);

const decrement = document.querySelector('button[data-action="decrement"]');
console.log(decrement);
const increment = document.querySelector('button[data-action="increment"]');

increment.addEventListener("click", function () {
  valueEl.textContent = value += 1;
});

decrement.addEventListener("click", function () {
  // this function is executed whenever the user clicks the decrement button
  valueEl.textContent = value -= 1;
});
