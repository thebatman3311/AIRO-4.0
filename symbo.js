const scriptURL =
  "https://script.google.com/macros/s/AKfycbwHKf9CbsBLpHYblkzR45JHMBn_9WT0M8G89DeEfvK3Sz9P7KZ0J5G00n27mC2BFoPr/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      window.location.href ='thank3.html'
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

document.addEventListener('DOMContentLoaded', () => {
  // Check if this page was loaded via history navigation
  if (performance.getEntriesByType('navigation')[0]?.type === 'back_forward') {
      window.location.href = 'index.html'; // Redirect to the main page
  } else {
      // Clear the history state to prevent the user from going back to this page
      if (window.history.replaceState) {
          window.history.replaceState(null, null, window.location.href);
      }
  }
});