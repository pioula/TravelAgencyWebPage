/* eslint-disable no-param-reassign */
const bookingForm = document.forms.booking_form;
const { fname, lname } = bookingForm.elements;

function checkIfNameCorrect(input) {
  return input.value === '' || input.value > 40;
}

function incorrectInput(input, e) {
  e.preventDefault();
  input.style.backgroundColor = 'red';
  input.style.borderColor = '#853B00';
  input.parentNode.querySelector('#input_error').style.display = 'block';
}

bookingForm.addEventListener('submit', (e) => {
  if (checkIfNameCorrect(fname)) {
    incorrectInput(fname, e);
  }
  if (checkIfNameCorrect(lname)) {
    incorrectInput(lname, e);
  }
});
