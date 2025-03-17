// Function to add an item to the card
function addItem() {
    let input = document.getElementById('item-input');
    let itemValue = input.value.trim();

    if (itemValue === "") {
        alert("Please enter a valid item.");
        return;
    }

    // Create new list item
    let li = document.createElement("li");
    li.textContent = itemValue;

    // Create delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
        deleteItem(li);
    };

    // Append the button to the list item
    li.appendChild(deleteButton);

    // Append the new item to the card list
    let itemList = document.getElementById('card-items-list');
    itemList.appendChild(li);

    // Clear the input field
    input.value = "";
}

// Function to delete an item from the card
function deleteItem(item) {
    item.remove();
}
