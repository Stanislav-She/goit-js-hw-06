const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length.toString() === inputRef.dataset.length) {
    changeClas("valid", "invalid");
  } else {
    changeClas("invalid", "valid");
  }
}

function changeClas(classOne, classTwo) {
  inputRef.classList.add(classOne);
  inputRef.classList.remove(classTwo);
}
