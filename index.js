const form = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(){
    form.submit();

    
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Form submitted');
})