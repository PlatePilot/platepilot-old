document.addEventListener("DOMContentLoaded", function() {
    var plateContainer = document.getElementById("PlateName");

    function changeName() {
        var divToRemove = plateContainer.querySelector("h4");
        if (divToRemove) {
            plateContainer.removeChild(divToRemove);
        }

        var addNameInput = document.createElement("input");
        addNameInput.type = "text";
        addNameInput.placeholder = "Add Name";
        addNameInput.id = "addNameInput";

        plateContainer.appendChild(addNameInput);

        var changeNameDiv = plateContainer.querySelector("#changeNameDiv");
        if (changeNameDiv) {
            plateContainer.removeChild(changeNameDiv);
        }


        addNameInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();

                var inputValue = addNameInput.value;

                localStorage.setItem("plateName", inputValue);

                var newDiv = document.createElement("h4");
                newDiv.textContent = inputValue;

                plateContainer.appendChild(newDiv);

                addNameInput.parentNode.removeChild(addNameInput);

                var newChangeNameDiv = document.createElement("h4");
                newChangeNameDiv.innerHTML = "<i class='bx bx-trash'></i>";
                newChangeNameDiv.id = "changeNameDiv";
                newChangeNameDiv.addEventListener("click", changeName);

                plateContainer.appendChild(newChangeNameDiv);
            }
        });
    }

    var savedPlateName = localStorage.getItem("plateName");

    if (savedPlateName) {
        var savedDiv = document.createElement("h4");
        savedDiv.textContent = savedPlateName;

        plateContainer.appendChild(savedDiv);

        var savedChangeNameDiv = document.createElement("h4");
        savedChangeNameDiv.innerHTML = "<i class='bx bx-trash'></i>";
        savedChangeNameDiv.id = "changeNameDiv";
        savedChangeNameDiv.addEventListener("click", changeName);

        plateContainer.appendChild(savedChangeNameDiv);
    } else {
        var addNameInput = document.createElement("input");
        addNameInput.type = "text";
        addNameInput.placeholder = "Add Name";
        addNameInput.id = "addNameInput";

        plateContainer.appendChild(addNameInput);

        addNameInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();

                var inputValue = addNameInput.value;

                localStorage.setItem("plateName", inputValue);

                var newDiv = document.createElement("h4");
                newDiv.textContent = inputValue;

                plateContainer.appendChild(newDiv);

                addNameInput.parentNode.removeChild(addNameInput);

                var changeNameDiv = document.createElement("h4");
                changeNameDiv.innerHTML = "<i class='bx bx-trash'></i>";
                changeNameDiv.id = "changeNameDiv";
                changeNameDiv.addEventListener("click", changeName);

                plateContainer.appendChild(changeNameDiv);
            }
        });
    }
});