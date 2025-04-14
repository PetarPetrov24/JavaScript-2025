document.addEventListener('DOMContentLoaded', solve);

function solve() {
    inputText = document.getElementById('newItemText');
    inputValue = document.getElementById('newItemValue');

    menu = document.getElementById('menu');
    addBtn = document.querySelector('[type="submit"]');

    addBtn.addEventListener('click', OnAdd);

    function OnAdd (ev) {
        ev.preventDefault();

        let textField = inputText.value;
        let valueField = inputValue.value;
        
        if (textField == '' || valueField == '') {
            return;
        }

        let option = document.createElement('option');
        option.textContent = textField;
        option.value = valueField;

        menu.appendChild(option);

        inputText.value = '';
        inputValue.value = '';
    }

}