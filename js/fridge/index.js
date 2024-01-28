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

const modalAddItemButton = document.getElementById("modal-add-item");

modalAddItemButton.addEventListener("click", function() {
    // create div with amount + name
    let fridgeModalName = document.getElementById("fridge-modal-name");
    let fridgeModalAmount = document.getElementById("fridge-modal-amount");

    let newFridgeItem = document.createElement("div");
    newFridgeItem.className = "item";
    newFridgeItem.id = "fridge-item-id-" + crypto.randomUUID();

    let amountSpan = document.createElement("span");
    amountSpan.appendChild(document.createTextNode(fridgeModalAmount.value))

    let nameSpan = document.createElement("span");
    nameSpan.appendChild(document.createTextNode(fridgeModalName.value))

    newFridgeItem.appendChild(amountSpan);
    newFridgeItem.appendChild(nameSpan);

    document.querySelector(".all-items-list").appendChild(newFridgeItem);

    // add to categorie
    let fridgeModalCategories = document.getElementById("fridge-modal-categories");
    let categoriesArray = ["fruits", "vegetables", "grains", "meat", "fish", "dairy", "sweets"];

    if (categoriesArray.includes(fridgeModalCategories.value)) {
        let newFridgeItemClone = newFridgeItem.cloneNode(true);
        document.querySelector("." + fridgeModalCategories.value).appendChild(newFridgeItemClone);
    }

    // add info icon + expiration date
    let fridgeModalExpiration = document.getElementById("fridge-modal-expiration");

    // close modal
    let addItemModal = document.getElementById("add-item-modal");
    addItemModal.style.display = "none";

    fridgeModalName.value = "none";
    fridgeModalAmount.value = "none";
    fridgeModalCategories.value = "none";
    fridgeModalExpiration.value = "none";
});