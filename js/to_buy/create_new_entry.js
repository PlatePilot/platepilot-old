import { createSpanFromInput } from "./create_span_from_input.js";

export function createNewEntry(toBuyList, name, checked) {
  let newContent = document.createElement("div");
  newContent.className = "content";
  newContent.id = "content-id-" + crypto.randomUUID();

  let checkboxTextWrapper = document.createElement("div");
  checkboxTextWrapper.className = "checkbox-text-wrapper";

  let checkboxWrapper = document.createElement("div");
  checkboxWrapper.className = "checkbox-wrapper";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  checkbox.checked = checked
  checkboxWrapper.appendChild(checkbox);

  let inputField = document.createElement("input");
  inputField.type = "text";
  
  checkboxTextWrapper.appendChild(checkboxWrapper); 
  checkboxTextWrapper.appendChild(inputField);
  
  if (name) {
    inputField.value = name
    createSpanFromInput(checkboxTextWrapper, inputField);
  } else {
    inputField.addEventListener("change", () => {
      
      if (toBuyList.findIndex(entry => entry.name === inputField.value) === -1) {
        createSpanFromInput(checkboxTextWrapper, inputField);
        
        toBuyList.push({
          name: inputField.value,
          checked: false
        });
        
        localStorage.setItem('toBuyList', JSON.stringify(toBuyList)); 
      }
    });
  }

  checkbox.addEventListener("input", (event) => {
    // Index von dem aktuellen angeklickten item suchen (inputField.value)
    // Dann toBuyList mittels des aktuell gefundenen indexes auswählen
    // Dann Wert "checked" setzen

    toBuyList.forEach((entry) => {
      if (entry.name === inputField.value) {
        entry.checked = event.target.checked
      }
    })

    localStorage.setItem('toBuyList', JSON.stringify(toBuyList));
  })

  let deleteButton = document.createElement("div");
  deleteButton.className = "delete-button";
  deleteButton.innerHTML = "<i class='bx bx-x'></i>";

  deleteButton.addEventListener("click", function () {
    newContent.parentNode.removeChild(newContent);

    toBuyList.splice(toBuyList.findIndex(entry => entry.name === inputField.value), 1)

    localStorage.setItem('toBuyList', JSON.stringify(toBuyList));
  });

  
  newContent.appendChild(checkboxTextWrapper);
  newContent.appendChild(deleteButton);

  document.querySelector(".content-wrapper").appendChild(newContent);

  inputField.focus();
}
