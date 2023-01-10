const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

inputRef.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  spanRef.style.fontSize = event.currentTarget.value + "px";
}
