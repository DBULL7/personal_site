let sendButton = document.getElementById('send')

sendButton.addEventListener('click', () => {
  let email = document.getElementById('email').value
  let subject = document.getElementById('subject').value
  let message = document.getElementById('message').value
  fetch('/api/v1/email', {
   method: 'POST',
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({
     email: email,
     subject: subject,
     message: message
   })
  })
})