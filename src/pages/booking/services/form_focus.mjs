/* Array.from(document.forms.booking_form.elements)
  .filter((e) => e.tagName.toLowerCase() === 'input')
  .forEach((input) => {
    input.addEventListener('focusin', (event) => {
      // eslint-disable-next-line no-param-reassign
      event.target.style.borderColor = 'azure';
    });
    input.addEventListener('focusout', (event) => {
      // eslint-disable-next-line no-param-reassign
      event.target.style.borderColor = '';
    });
  }); */

let previousInput;

// document.forms.booking_form.addEventListener(['focusin', 'focusout'], (event) => {
//   if (previousInput) {
//     previousInput.style.borderColor = '';
//   }
//   // eslint-disable-next-line no-param-reassign
//   event.target.style.borderColor = 'red';
//   previousInput = event.target;
// });

document.addEventListener('click', (event) => {
  if (previousInput) {
    previousInput.style.borderColor = '';
  }
  if (event.target.tagName === 'INPUT') {
    // eslint-disable-next-line no-param-reassign
    event.target.style.borderColor = 'azure';
    previousInput = event.target;
  }
}, true);
