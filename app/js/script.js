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

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (firstName.value === '') {
    showError(firstName, 'First Name is required');
  } else {
    showSuccess(firstName);
  }

  if (lastName.value === '') {
    showError(lastName, 'Last Name is required');
  } else {
    showSuccess(lastName);
  }

  if (email.value === '') {
    -
      showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }
});
