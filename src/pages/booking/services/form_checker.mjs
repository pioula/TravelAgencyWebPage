const bookingForm = document.forms.booking_form;
const { fname, lname } = bookingForm.elements;

bookingForm.addEventListener('submit', (e) => {
  if (fname.value === '' || lname.value === ''
      || fname.value.length > 40 || lname.value.length > 40) {
    e.preventDefault();
  }
});
