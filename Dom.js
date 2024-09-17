document.addEventListener('DOMContentLoaded', function() {
    const addItemButton = document.getElementById('add-item');
    const itemList = document.getElementById('item-list');

    addItemButton.addEventListener('click', function() {
        const itemNameInput = document.getElementById('item-name');
        const itemQuantityInput = document.getElementById('item-quantity');

        const itemName = itemNameInput.value.trim();
        const itemQuantity = itemQuantityInput.value.trim();

        if (itemName && itemQuantity) {
            addItem(itemName, itemQuantity);
            itemNameInput.value = '';
            itemQuantityInput.value = '';
        }
    });

    function addItem(name, quantity) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const itemNameSpan = document.createElement('span');
        itemNameSpan.textContent = name;

        const itemQuantitySpan = document.createElement('span');
        itemQuantitySpan.textContent = quantity;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            editItem(itemDiv, name, quantity);
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            removeItem(itemDiv);
        });

        itemDiv.appendChild(itemNameSpan);
        itemDiv.appendChild(itemQuantitySpan);
        itemDiv.appendChild(editButton);
        itemDiv.appendChild(removeButton);

        itemList.appendChild(itemDiv);
    }

    function editItem(itemDiv, oldName, oldQuantity) {
        const newName = prompt('Enter new item name:', oldName);
        const newQuantity = prompt('Enter new quantity:', oldQuantity);

        if (newName && newQuantity) {
            itemDiv.querySelector('span').textContent = newName;
            itemDiv.querySelectorAll('span')[1].textContent = newQuantity;
        }
    }

    function removeItem(itemDiv) {
        itemList.removeChild(itemDiv);
    }
});