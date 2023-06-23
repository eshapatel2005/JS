let form = document.querySelector('.sign-up-Form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}";

form.addEventListener('submit', e=>{
    e.preventDefault();
    let passwordValue = password.value;
    console.log(passwordValue);
    let result = passwordValue.match(passwordPattern);
    console.log(result);
    if (result) {
        console.log("Your password is Strong")
    }else {
        console.log("Try again")
    }

})