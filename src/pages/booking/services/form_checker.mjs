const bookingForm = document.forms.booking_form;
const { fname, lname } = bookingForm.elements;

bookingForm.addEventListener('submit', (e) => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
  }
});
