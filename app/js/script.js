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

// Check email is valid
function isValidEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

// Check Required field
function checkRequired(inputArr) {
  // Loop through the array, then do the check on each one.
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${input.placeholder} is required`);
    } else {
      showSuccess(input);
    }
  });
};


// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([firstName, lastName, email, password]);
});
