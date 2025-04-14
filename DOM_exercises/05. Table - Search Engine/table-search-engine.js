function solve() {
    let tableBody = document.querySelectorAll('tbody tr');
    let searchField = document.getElementById('searchField').value.trim().toLowerCase();
    
    document.getElementById('searchField').value = '';

    tableBody.forEach(row => {
        row.classList.remove('select');
        row.style.backgroundColor = '';
    })
    
    
    tableBody.forEach(row => {
        if (row.textContent.toLowerCase().includes(searchField) && searchField !== '') {
            row.style.backgroundColor = 'yellow';
            row.classList.add('select');
        }
    })
}



