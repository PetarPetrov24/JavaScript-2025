document.addEventListener('DOMContentLoaded', focused)

function focused() {
    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlured);
    }
    
    function onFocus (e) {
       e.target.parentElement.classList.add('focused');
    }

    function onBlured (e) {
        e.target.parentElement.classList.remove('focused');
    }
}
