export function createSpanFromInput(checkboxTextWrapper, inputField) {
  let span = document.createElement("span");
  span.appendChild(document.createTextNode(inputField.value));

  checkboxTextWrapper.removeChild(inputField);
  checkboxTextWrapper.appendChild(span);
}