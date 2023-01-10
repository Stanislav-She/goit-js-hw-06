const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", changeOutput);

function changeOutput(event) {
  if (event.currentTarget.value === "") {
    spanRef.textContent = "Anonymous";
  } else {
    spanRef.textContent = event.currentTarget.value;
  }
}
