const form = document.querySelector ("form");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validateForm () {

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const emailAddress = document.getElementById("emailAddress");
  const password = document.getElementById("passwordInput");

  

  if (firstName.value == "") {
        firstNameError.innerHTML = "First Name cannot be empty";
        return false;
      } 
  
  if (lastName.value == "") {
    lastNameError.innerHTML = "Last Name cannot be empty";
    return false;
  } 

  if (emailAddress.value == "") {
    emailError.innerHTML = "Looks like this is not an email";
    return false;
  }

  if (password.value == "") {
    passwordError.innerHTML = "Password cannot be empty";
    return false;
  }
  return true;

}


// function validateFirstName () {
//   const firstName = document.getElementById("firstName");

//   if (firstName.value == "") {
//     firstNameError.innerHTML = "First Name cannot be empty";
//     return false;
//   } 
//   return true;
// }

// function validateLastName () {
//   const lastName = document.getElementById("lastName");

//     if (lastName.value == "") {
//     lastNameError.innerHTML = "Last Name cannot be empty";
//     return false;
//   } 
//     return true;
// }

// function validateEmail () {
//   const emailAddress = document.getElementById("emailAddress");

//     if (emailAddress.value == "") {
//     emailError.innerHTML = "Looks like this is not an email";
//     return false;
//   }
//   return true;
// }

// function validatePassword () {
//   const password = document.getElementById("passwordInput");

//   if (password.value == "") {
//     passwordError.innerHTML = "Password cannot be empty";
//     return false;
//   }
//   return true;

// }

