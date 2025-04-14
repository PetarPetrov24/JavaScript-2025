function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadPhonebookEntries);
    document.getElementById('btnCreate').addEventListener('click', createEntry);
}

attachEvents();

async function allPhonebookEntries () {
    let res = await fetch('http://localhost:3030/jsonstore/phonebook');
    let data = await res.json();
    
    return Object.values(data);
}

async function loadPhonebookEntries () {
    let phonebook = await allPhonebookEntries();
    let phonebookUl = document.getElementById('phonebook');
    phonebookUl.replaceChildren();



    for (let entry of phonebook) {
        let li = document.createElement('li');
        li.append(`${entry.person}: ${entry.phone}`);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', () => deleteEntry(entry._id));
        li.appendChild(deleteBtn);
        phonebookUl.append(li);
    }
}

async function createEntry () {
    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');

    let person = personInput.value;
    let phone = phoneInput.value;

    if (!person || !phone) {
        return;
    }

    let option = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ person, phone })
    }

    try {
        await fetch('http://localhost:3030/jsonstore/phonebook', option);
        
        personInput.value = '';
        phoneInput.value = '';

        await loadPhonebookEntries();

    } catch (error) {
        console.log('Failed to create entry', error)
    }
} 


async function deleteEntry (key) {
    await fetch('http://localhost:3030/jsonstore/phonebook/' + key, { method: 'delete' });
    await loadPhonebookEntries();
}