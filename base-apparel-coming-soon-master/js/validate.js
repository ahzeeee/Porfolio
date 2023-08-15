const emailError = document.getElementById("emailError");


function validateEmail () {
    const email = document.getElementById("emailAddress");
    

    if (!email.value.match(/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/)) {
        emailError.innerHTML = 'Please provide a valid email';
        return false;
    }
}