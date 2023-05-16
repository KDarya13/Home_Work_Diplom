const btnStartTrial = document.querySelector('.sign-up-block-button');
console.log(btnStartTrial);
const password = document.querySelector('#password');
console.log(password);
const passwordCheck = document.querySelector('#passwordCheck');
console.log(passwordCheck);

btnStartTrial.addEventListener('click', () => {
    if (password.value !== passwordCheck.value) {
        password.style.border = '1px solid red';
        passwordCheck.style.border = '1px solid red';
        alert('Пароли не совпадают');
    } else {
        password.style.border = '1px solid green';
        passwordCheck.style.border = '1px solid green';
    }
})