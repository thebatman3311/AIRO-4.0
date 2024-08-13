const scriptURL =
  "https://script.google.com/macros/s/AKfycbwRITGiLZvU7qGWnlHF7c6oc4477w9SGIW-p6p0rc1NdfV_-tviB3uPwcu3_wn_sSgiaA/exec";

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
