export function createNewEntry(name) {
    let fridgeModalName = document.getElementById("fridge-modal-name");
    let fridgeModalAmount = document.getElementById("fridge-modal-amount");
    let fridgeModalCategories = document.getElementById("fridge-modal-categories"); 

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

    let fridgeModalExpiration = document.getElementById("fridge-modal-expiration");

    if (fridgeModalExpiration.value.trim() !== "") {

        let infoSpan = document.createElement("span");
        infoSpan.className = "info-span";
        infoSpan.innerHTML = "<i class='bx bx-info-circle'></i>"
        newFridgeItem.appendChild(infoSpan);

        let infoSpanContent = document.createElement("div");
        infoSpanContent.className = "info-span-content";
        infoSpan.appendChild(infoSpanContent);
        infoSpan.appendChild(document.createTextNode(fridgeModalExpiration.value));
    }

    console.log(fridgeModalCategories.value)

    let categoriesArray = ["fruits", "vegetables", "grains", "meat", "fish", "dairy", "sweets"];

    if (categoriesArray.includes(fridgeModalCategories.value)) {
        let newFridgeItemClone = newFridgeItem.cloneNode(true);
        document.querySelector("." + fridgeModalCategories.value).appendChild(newFridgeItemClone);
    }

    let addItemModal = document.getElementById("add-item-modal");
    addItemModal.style.display = "none";

    fridgeModalName.value = "";
    fridgeModalAmount.value = "";
    fridgeModalCategories.value = "";
    fridgeModalExpiration.value = "";


    const newEntry = {
        id: newFridgeItem.id,
        name: fridgeModalName.value,
        amount: fridgeModalAmount.value,
        expiration: fridgeModalExpiration.value.trim() !== "" ? fridgeModalExpiration.value : null,
        category: fridgeModalCategories.value
    };

    firdgeItems.push(newEntry);

    localStorage.setItem('fridgeItems', JSON.stringify(fridgeItems));
}