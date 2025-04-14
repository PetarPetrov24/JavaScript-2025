function solve() {
    let checkboxes = document.querySelectorAll('th input[type="checkbox"]');
    let rows = document.querySelectorAll('tbody tr');
    let output = document.getElementById('output');
    let selectedColumns = [];

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            selectedColumns.push({ index, name: checkbox.name});
        }
    })

    report = [];

    rows.forEach(row => {
        rowData = {};
        cells = row.children;

        selectedColumns.forEach(col => {
            rowData[col.name] = cells[col.index].textContent;
        });
        report.push(rowData);
    });

    output.value = JSON.stringify(report, null, 2);


}