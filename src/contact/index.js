import './main.css'

let sendButton = document.getElementById('send')

sendButton.addEventListener('click', () => {
  let email = document.getElementById('email').value
  let subject = document.getElementById('subject').value
  let message = document.getElementById('message').value
  if (email === '') {
    badInput('email')
  } 
  if (subject === '') {
    badInput('subject') 
  } 
  if (message === '') { 
    badInput('message') 
  }
  if (email === '' || subject === '' || message === '') return 
  fetch('/api/v1/email', {
   method: 'POST',
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({
     email: email,
     subject: subject,
     message: message
   })
  }).then(res => res.json())
  .then(result => console.log(result))
  .catch(err => console.log(err))
})

let badInput = (elementName) => {
  let element = document.getElementById(elementName)
  element.style.borderBottom = '2px solid red'
  setTimeout(function() {
    element.style.borderBottom = '2px solid #D3C8C8'
  }, 2000);
}

let email = document.getElementById('email')
let emailLabel = document.getElementById('email-label')
email.addEventListener('focus', () => {
  emailLabel.style.color = '#39F'
  emailLabel.style.top = '-45px'
  emailLabel.style.fontSize = '12px'
})
email.addEventListener('blur', () => {
  emailLabel.style.color = '#dff937'
  emailLabel.style.fontSize = '22px'
  let pixels = emailLabel.style.top
  blur(pixels, emailLabel)
})


let subject = document.getElementById('subject')
let subjectLabel = document.getElementById('subject-label')
subject.addEventListener('focus', () => {
  subjectLabel.style.color = '#39F'
  subjectLabel.style.top = '-45px'
  subjectLabel.style.fontSize = '12px'
})
subject.addEventListener('blur', () => {
  subjectLabel.style.color = '#dff937'
  subjectLabel.style.fontSize = '22px'
  let pixels = subjectLabel.style.top
  blur(pixels, subjectLabel)
})


let message = document.getElementById('message')
let messageLabel = document.getElementById('message-label')
message.addEventListener('focus', () => {
  messageLabel.style.color = '#39F'
  messageLabel.style.top = '-45px'
  messageLabel.style.fontSize = '12px'
})
message.addEventListener('blur', () => {
  messageLabel.style.color = '#dff937'
  let pixels = messageLabel.style.top
  blur(pixels, messageLabel)
  messageLabel.style.fontSize = '22px'
})


let blur = (pixels, elem) => {
  let value = parseInt(pixels, 10)
  let absolute = Math.abs(value)
  for (let i = value; i <= -20; i++) {
    elem.style.top = `${i}px`
  }
}