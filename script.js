let submitButton = document.getElementById('submitButton');
let signUp = document.getElementById('signUp');

if(submitButton){
   submitButton.addEventListener('click', function(){
    alert('Thank you for letting us know how awesome we are! See you soon in the races!');
}); 
} else if(signUp){
signUp.addEventListener('click', function(){
prompt('Tell us your email and we will contact you there for more form filling information!');

});

}


