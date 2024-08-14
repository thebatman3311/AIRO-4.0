const scriptURL =
  "https://script.google.com/macros/s/AKfycbzcNB3itRCEja1KuHxJZqlQb7-Xo5JMRSYRc9qIOgjV1KBIoY57GrvgoYKfFrziKtwghg/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
window.location.href ='thank6.html'    )

    .catch((error) => console.error("Error!", error.message));
});

// function handleSubmit(event) {
//   // Get the email input field
//   const emailInput = document.getElementById('email-input');
//   const emailValue = emailInput.value.trim();
  
//   // Check if the email value contains '@gmail.com'
//   if (!emailValue.endsWith('@gmail.com')) {
//       // Show an error message
//       alert('Please enter an email address ending with @gmail.com');
//       // Prevent the default form submission
//       event.preventDefault();
//   } else {
//       // Redirect to the new page
//       window.location.href = 'thank6.html';
//   }
// }

// document.getElementById('myForm').addEventListener('submit', handleSubmit);
