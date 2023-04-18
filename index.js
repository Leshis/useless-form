const form = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

submitBtn.addEventListener('click', function(){
    form.submit();
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Form submitted');
})

confirmPassword.addEventListener('keyup', function(){
    if(password.value != confirmPassword.value){
        password.style.border = '1px solid red';
        confirmPassword.style.border = '1px solid red';
    } else {
        password.style.border = '';
        confirmPassword.style.border = '';
    }
})