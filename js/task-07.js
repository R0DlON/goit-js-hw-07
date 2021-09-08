const input = document.getElementById("font-size-control");
// console.log(input);

const span = document.getElementById("text");
// короткая запись
const handleInputRange = () => {
  span.setAttribute("style", `font-size: ${input.value}px`);
};
input.addEventListener("input", handleInputRange);

// ---------длинная запись
// function handleInputRange(event) {
//   span.style.fontSize = event.currentTarget.value + "px";
//   console.log(event.currentTarget.value);
//   console.log(event.currentTarget);
// }
