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


let fridgeItems = [];

const storedFridgeItems = JSON.parse(localStorage.getItem('fridgeItems')) || [];

fridgeItems.forEach((entry) => {
    createNewEntry(entry);
});

const modalAddItemButton = document.getElementById("modal-add-item");

modalAddItemButton.addEventListener("click", function() {
    createNewEntry();
});

function createNewEntry(entry) {
    let fridgeModalName = document.getElementById("fridge-modal-name");
    let fridgeModalAmount = document.getElementById("fridge-modal-amount");
    let fridgeModalCategories = document.getElementById("fridge-modal-categories");
    let fridgeModalExpiration = document.getElementById("fridge-modal-expiration");

    if (!fridgeModalName || !fridgeModalAmount || !fridgeModalCategories || !fridgeModalExpiration) {
        console.error("One or more elements not found. Aborting createNewEntry.");
        return;
    }

    const newFridgeItem = document.createElement("div");
    newFridgeItem.className = "item";
    newFridgeItem.id = "fridge-item-id-" + crypto.randomUUID();

    let amountSpan = document.createElement("span");
    amountSpan.appendChild(document.createTextNode(fridgeModalAmount.value));

    let nameSpan = document.createElement("span");
    nameSpan.appendChild(document.createTextNode(fridgeModalName.value));

    newFridgeItem.appendChild(amountSpan);
    newFridgeItem.appendChild(nameSpan);

    document.querySelector(".all-items-list").appendChild(newFridgeItem);

    let fridgeModalExpirationValue = fridgeModalExpiration.value.trim();

    if (fridgeModalExpirationValue !== "") {
        let infoSpan = document.createElement("span");
        infoSpan.className = "info-span";
        infoSpan.innerHTML = "<i class='bx bx-info-circle'></i>";
        newFridgeItem.appendChild(infoSpan);

        let infoSpanContent = document.createElement("div");
        infoSpanContent.className = "info-span-content";
        infoSpan.appendChild(infoSpanContent);
        infoSpan.appendChild(document.createTextNode(fridgeModalExpirationValue));
    }

    let categoriesArray = ["fruits", "vegetables", "grains", "meat", "fish", "dairy", "sweets"];

    if (categoriesArray.includes(fridgeModalCategories.value)) {
        let categoryContainer = document.querySelector("." + fridgeModalCategories.value);

        if (categoryContainer) {
            let newFridgeItemClone = newFridgeItem.cloneNode(true);
            categoryContainer.appendChild(newFridgeItemClone);
        } else {
            console.error("Category container not found. Aborting createNewEntry.");
        }
    }

    let addItemModal = document.getElementById("add-item-modal");
    addItemModal.style.display = "none";

    // fridgeModalName.value = "";
    // fridgeModalAmount.value = "";
    // fridgeModalCategories.value = "";
    // fridgeModalExpiration.value = "";

    const newEntry = {
        name: fridgeModalName.value,
        amount: fridgeModalAmount.value,
        expiration: fridgeModalExpirationValue !== "" ? fridgeModalExpirationValue : null,
        category: fridgeModalCategories.value
    };

    fridgeItems.push(newEntry);
    localStorage.setItem('fridgeItems', JSON.stringify(fridgeItems));
}