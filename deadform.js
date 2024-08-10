const scriptURL = 'https://script.google.com/macros/s/AKfycbxmsT_Lcm9kvQd3Rhvrnk9PU_IxeL6Ixs6cCjkiTqb6WPu5SMwqwugQ-cL3ZVU5r4Ep/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})