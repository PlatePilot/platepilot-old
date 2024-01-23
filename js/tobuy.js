document.addEventListener("DOMContentLoaded", function() {
    const addContentButton = document.getElementById("add-content-button");
    addContentButton.addEventListener("click", function() {
        // Your existing JavaScript code here
        var newContent = document.createElement("div");
        newContent.className = "content";
        newContent.id = "content-id-" + (document.querySelectorAll(".content").length + 1);

        // Create checkbox-text-wrapper
        var checkboxTextWrapper = document.createElement("div");
        checkboxTextWrapper.className = "checkbox-text-wrapper";

        // Create checkbox-wrapper
        var checkboxWrapper = document.createElement("div");
        checkboxWrapper.className = "checkbox-wrapper";
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkboxWrapper.appendChild(checkbox);

        // Create input field for item name
        var inputField = document.createElement("input");
        inputField.type = "text";
        inputField.placeholder = "Type item name and press Enter";
        inputField.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                createSpanFromInput();
            }
        });

        // Handle input field blur (loses focus)
        inputField.addEventListener("blur", function() {
            createSpanFromInput();
        });

        // Function to create span from input field value
        function createSpanFromInput() {
            var span = document.createElement("span");
            span.appendChild(document.createTextNode(inputField.value));

            // Remove the input field
            checkboxTextWrapper.removeChild(inputField);
            checkboxTextWrapper.appendChild(span);
        }

        // Create delete-button
        var deleteButton = document.createElement("div");
        deleteButton.className = "delete-button";
        deleteButton.innerHTML = "<i class='bx bx-minus'></i>";
        
        // Add event listener to delete button
        deleteButton.addEventListener("click", function() {
            // Remove the entire content div
            newContent.parentNode.removeChild(newContent);
        });

        checkboxTextWrapper.appendChild(checkboxWrapper);
        checkboxTextWrapper.appendChild(inputField);
        newContent.appendChild(checkboxTextWrapper);
        newContent.appendChild(deleteButton);

        // Append the new content to list-content
        document.querySelector(".content-wrapper").appendChild(newContent);

        // Focus on the input field after it's appended
        inputField.focus();
    });
});