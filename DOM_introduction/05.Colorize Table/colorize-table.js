function colorize() {
    let tableProperties = document.querySelectorAll('tbody tr');

    for (let i=0; i < tableProperties.length; i++) {
        if (i % 2 !== 0) {
            tableProperties[i].style.backgroundColor= 'Teal';
        }
    }
}