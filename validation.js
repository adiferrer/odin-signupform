const passwordError = document.getElementById('password-error');
const submitButton = document.getElementById('submit');
const passwords = Array.from(document.getElementsByClassName('error'));
// const inputs = 

submitButton.addEventListener('click', () => {

    // password validation
    if(passwords[0].value != passwords[1].value) {
        passwordError.textContent = '';
        const asterisk = document.createElement('sup');
        const asteriskText = document.createTextNode('*');
        asterisk.appendChild(asteriskText);

        passwordError.insertBefore(asterisk, passwordError[0]);
        passwordError.textContent += ' Passwords do not match';

        passwords.forEach(passBox => passBox.style.borderColor = 'red');
    } else {
        passwordError.textContent = '';
        passwords.forEach(passBox => passBox.style.borderColor = '#E5E7EB');
    }
})