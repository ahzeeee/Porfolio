const emailError = document.getElementById("emailError");


function validateEmail () {
    const email = document.getElementById("emailAddress");
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   

    if (!email.value.match(emailFormat)) {
        emailError.innerHTML = ' Please provide a valid email';
        return false;
    }
    return true;
}

