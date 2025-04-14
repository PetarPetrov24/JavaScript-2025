function sumTable() {
    let tableRows = [...document.querySelectorAll('table tr')];
    tableRows.shift();
    let output = tableRows.pop();
    let sum = 0;

    for (row of tableRows) {
        let col = row.children[row.children.length - 1];
        sum += Number(col.textContent)
    }

    let outputCol = output.children[output.children.length - 1];
    outputCol.textContent = sum;
}