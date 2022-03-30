Array.from(document.forms.booking_form.elements)
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
  });
