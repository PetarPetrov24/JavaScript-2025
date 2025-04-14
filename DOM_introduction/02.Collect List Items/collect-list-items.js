function extractText() {
    let lists = document.querySelectorAll('li');
    let textArea = document.getElementById('result');

    for (let list of lists) {
        textArea.value += list.textContent + '\n';
    }
}