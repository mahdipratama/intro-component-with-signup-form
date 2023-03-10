const form = document.querySelector('.form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


// Show Error Message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add('error');
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show Success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add('success');
  formControl.classList.remove('error');
}


// Check Required field
function checkRequired(inputArr) {
  // Loop through the array, then do the check on each one.
  inputArr.forEach(function (input) {
    // to Check is input are empty or not
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);

      // pass a function to check input whether meet certain requirements or not   
    } else if (checkLength && checkEmail) {
      checkEmail(email)
      checkLength(firstName, 5, 15);
      checkLength(lastName, 5, 15);
      checkLength(password, 8, 20);
      // Showing success when all inputs are meet certain requirements
    } else {
      showSuccess(input);
    }
  });
};


// console.log(isValid);

// Check email is valid
function checkEmail(input) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid')
  }
};


// Get fieldName
function getFieldName(input) {
  return input.placeholder;
};


// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`)
  } else {
    showSuccess(input);
  }
};

// Store Form Data
function storeFormData() {
  const user = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    password: form.password.value,
  }

  // Do Something with user data
  console.log(user);

};


function processFormData(e) {
  e.preventDefault();

  // Set isValid to true by default
  let isValid = true;

  // Check 
  checkRequired([firstName, lastName, email, password]);

  const inputs = e.target.elements;

  // Loop through the inputs and check if any are invalid
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].parentElement.classList.contains('error')) {
      isValid = false;
      break
    }
  }

  // if isValid is true, store the form data and print it out
  if (isValid) storeFormData();
};


// Event listeners
form.addEventListener('submit', processFormData)

