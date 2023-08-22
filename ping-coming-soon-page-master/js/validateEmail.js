const emailError = document.getElementById("emailError");



function changeBoarder () {
    const emailField = document.querySelector(`input[type='email']`);

    emailField.classList.add('invalid-input');
}

function validateEmail () {
    const email = document.getElementById("emailAddress");
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   

    if (!email.value.match(emailFormat)) {
        emailError.innerHTML = ' Please provide a valid email';
        changeBoarder();
        return false;
    }
    return true;
}

