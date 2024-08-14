const scriptURL =
  "https://script.google.com/macros/s/AKfycbxi1ipIhO-yP3kipkvhKuKOsoOpmyyFI0WD6qZdpqROX7ANWjLZxpU9BC6MO_6vflQbQQ/exec";

const form = document.forms["contact-form"];
// In the form submission page (e.g., submit.html)
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


form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      window.location.href ='thank4.html'
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
