document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let generateBtn = document.querySelector('input[type="submit"]');
    let content = document.getElementById('content');
    
    generateBtn.addEventListener('click', OnGenerate);

    function OnGenerate (event) {
        event.preventDefault();

        let data = document.querySelector('input[type="text"]').value;
        let sections = data.split(', ');

        for (let section of sections) {
            let div = document.createElement('div');
            let paragraph = document.createElement('p');
            
            paragraph.textContent = section;
            div.appendChild(paragraph);

            content.appendChild(div);
        }
    }

}