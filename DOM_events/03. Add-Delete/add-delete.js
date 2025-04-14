function addItem() {
    let input = document.getElementById('newItemText');
    let text = input.value;

    if (!text) {
        return
    }
    
    let newLi = document.createElement('li');
    newLi.textContent = text;

    let deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    deleteBtn.addEventListener('click', onDelete);

    newLi.appendChild(deleteBtn);

    let liItems = document.getElementById('items');
    liItems.appendChild(newLi);

    input.value = '';

    function onDelete (event) {
        let item = event.target.parentElement;
        item.remove();
    }
}
