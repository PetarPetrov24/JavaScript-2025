document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let buttons = Array.from(document.querySelectorAll('button'));
    
    for (let button of buttons) {
        button.addEventListener('click', toggleText);
    }

    function toggleText (ev) {
        let profile = ev.target.parentElement;

        let isLocked = profile.querySelector('[type="radio"]').checked;
        

        if (isLocked) {
            return;
        }

        let info = profile.querySelector('.hidden-fields')

        if (info.style.display == 'none' || info.style.display == '') {
            info.style.display = 'block';
            ev.target.textContent = 'Show less'; 
        }
        else {
            info.style.display = 'none';
            ev.target.textContent = 'Show more';
        }
    }
}