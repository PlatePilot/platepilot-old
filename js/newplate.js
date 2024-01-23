document.addEventListener("DOMContentLoaded", function() {
    var plateContainer = document.getElementById("PlateName");

    function changeName() {
        // Remove the div
        var divToRemove = plateContainer.querySelector("h4");
        if (divToRemove) {
            plateContainer.removeChild(divToRemove);
        }

        // Bring back the input field
        var addNameInput = document.createElement("input");
        addNameInput.type = "text";
        addNameInput.placeholder = "Add Name";
        addNameInput.id = "addNameInput";

        plateContainer.appendChild(addNameInput);

        // Remove the "Change Name" div
        var changeNameDiv = plateContainer.querySelector("#changeNameDiv");
        if (changeNameDiv) {
            plateContainer.removeChild(changeNameDiv);
        }

        // Add event listener to the new input field
        addNameInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();

                var inputValue = addNameInput.value;

                // Save the name in local storage
                localStorage.setItem("plateName", inputValue);

                var newDiv = document.createElement("h4");
                newDiv.textContent = inputValue;

                plateContainer.appendChild(newDiv);

                // Remove the input field again
                addNameInput.parentNode.removeChild(addNameInput);

                // Add the "Change Name" div again
                var newChangeNameDiv = document.createElement("h4");
                newChangeNameDiv.innerHTML = "<i class='bx bx-trash'></i>";
                newChangeNameDiv.id = "changeNameDiv";
                newChangeNameDiv.addEventListener("click", changeName);

                plateContainer.appendChild(newChangeNameDiv);
            }
        });
    }

    // Check if there's a saved name in local storage
    var savedPlateName = localStorage.getItem("plateName");

    if (savedPlateName) {
        // Create and display the div with the saved name
        var savedDiv = document.createElement("h4");
        savedDiv.textContent = savedPlateName;

        plateContainer.appendChild(savedDiv);

        // Add the "Change Name" div
        var savedChangeNameDiv = document.createElement("h4");
        savedChangeNameDiv.innerHTML = "<i class='bx bx-trash'></i>";
        savedChangeNameDiv.id = "changeNameDiv";
        savedChangeNameDiv.addEventListener("click", changeName);

        plateContainer.appendChild(savedChangeNameDiv);
    } else {
        // Initial setup with the input field if there is no saved name
        var addNameInput = document.createElement("input");
        addNameInput.type = "text";
        addNameInput.placeholder = "Add Name";
        addNameInput.id = "addNameInput";

        plateContainer.appendChild(addNameInput);

        // Add event listener to the initial input field
        addNameInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();

                var inputValue = addNameInput.value;

                localStorage.setItem("plateName", inputValue);

                var newDiv = document.createElement("h4");
                newDiv.textContent = inputValue;

                plateContainer.appendChild(newDiv);

                // Remove the initial input field
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