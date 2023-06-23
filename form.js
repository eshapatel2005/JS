let form = document.querySelector('.sign-up-Form');
// let email = document.querySelector('#email');
// let password = document.querySelector('#password');

form.addEventListener('submit', e=>{
    e.preventDefault();
    console.log(form.userEmail.value, form.userPassword.value);

})