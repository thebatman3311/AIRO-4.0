const scriptURL =
  "https://script.google.com/macros/s/AKfycbxMkmt6ILRAA216aqqdBakw9OuugV8GsLwoWWqD3m3SV62kk-Pv-YW34q01CnATx0fZmw/exec";

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
