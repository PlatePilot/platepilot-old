const addItemButton = document.getElementById("add-item-button");
const closeModalButton = document.getElementById("close-modal-button");

addItemButton.addEventListener("click", function() {
    let addItemModal = document.getElementById("add-item-modal");

    addItemModal.style.display = "flex";
});

closeModalButton.addEventListener("click", function() {
    let addItemModal = document.getElementById("add-item-modal");

    addItemModal.style.display = "none";
});

window.onclick = function(event) {
    let addItemModal = document.getElementById("add-item-modal");

    if (event.target == addItemModal) {
        addItemModal.style.display = "none"
    }
}