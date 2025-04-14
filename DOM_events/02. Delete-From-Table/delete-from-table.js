function deleteByEmail() {
    let input = document.querySelector('[name="email"]');
    let pattern = input.value;
    
    if (!pattern) {
        return
    }

    let rows = document.querySelectorAll('tbody tr')
    let result = document.getElementById('result');
    let found = false;

    for (let row of rows) {
        let emailCol = row.children[1];
        let email = emailCol.textContent;

        if (email.includes(pattern)) {
            row.remove();
            found = true;
            break;
        }
    }
    
    if (found) {
        pattern = '';
        result.textContent = 'Deleted.'
    } else {
        result.textContent = 'Not found.'
    }

}