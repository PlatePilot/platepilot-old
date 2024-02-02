import { createNewEntry } from "./create_new_entry.js"; 

const addContentButton = document.getElementById("add-content-button");

const toBuyList = JSON.parse(localStorage.getItem('toBuyList') ?? '[]')

toBuyList.forEach((entry) => {
  createNewEntry(toBuyList, entry.name, entry.checked);
})


addContentButton.addEventListener("click", function() {
    
    createNewEntry(toBuyList);
});