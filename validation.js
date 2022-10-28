const passwordError = document.getElementById('password-error');
const submitButton = document.getElementById('submit');
const passwords = Array.from(document.getElementsByClassName('error'));

submitButton.addEventListener('click', () => {
    if(passwords[0].value == '' || passwords[0].value != passwords[1].value) {
        passwordError.textContent = '';
        const asterisk = document.createElement('sup');
        const asteriskText = document.createTextNode('*');
        asterisk.appendChild(asteriskText);

        passwordError.insertBefore(asterisk, passwordError[0]);
        passwordError.textContent += ' Passwords do not match';
    }
})