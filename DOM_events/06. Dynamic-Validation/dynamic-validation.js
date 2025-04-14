document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let input = document.getElementById('email');
    input.addEventListener('change', validate);


    function validate (e) {
        let input = e.target;
        let email = input.value;

        let emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/

        if (!emailPattern.test(email)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }
    
}
