const scriptURL =
  "https://script.google.com/macros/s/AKfycbzOyJMqO01Aw10SdlGlMKcrni02Nph0aoXIRy_23M6seZBzrch28Rkxn_dg2B3X-VDF/exec ";

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
