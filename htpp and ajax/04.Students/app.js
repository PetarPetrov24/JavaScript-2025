async function loadStudents () {
    let tbody = document.querySelector('tbody');
    let res = await fetch('http://localhost:3030/jsonstore/collections/students');
    let data = await res.json();

    tbody.replaceChildren();

    for (let student of Object.values(data)) {
        let tableRow = document.createElement('tr'); 

        tableRow.innerHTML = `            
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.facultyNumber}</td>
            <td>${student.grade}</td>
        `;
        tbody.appendChild(tableRow);
    }
    
}

async function createStudent (event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);

    let firstName = formData.get('firstName');
    let lastName = formData.get('lastName');
    let facultyNumber = formData.get('facultyNumber');
    let grade = formData.get('grade');

    if (!firstName || !lastName || !facultyNumber || isNaN(grade)) {
        return
    }
    
    let newStudent = {
        firstName,
        lastName,
        facultyNumber,
        grade
    }

    await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStudent)
    });

    form.reset();
    loadStudents();
}

async function attachEvent () {
    let form = document.getElementById('form');
    form.addEventListener('submit', createStudent);

    loadStudents();
}

attachEvent();