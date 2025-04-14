function addItem() {
    // find the <ul> list
    // find the input field
    // create a new <li> element
    // append <li> element to the <ul> list
    // set the <li> text to the input field's value
    // clear the input field after adding the item
    
    let liItems = document.getElementById('items');
    let textInput = document.getElementById('newItemText');

    let creatingElement = document.createElement('li');
    let AppendedElement = liItems.appendChild(creatingElement);

    AppendedElement.textContent = textInput.value;
    textInput.value = '';

}
