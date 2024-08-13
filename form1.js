const scriptURL =
  "https://script.google.com/macros/s/AKfycbzcNB3itRCEja1KuHxJZqlQb7-Xo5JMRSYRc9qIOgjV1KBIoY57GrvgoYKfFrziKtwghg/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
