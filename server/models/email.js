require('dotenv').config()
const sgMail = require('@sendgrid/mail');

const msg = (req, res) => {
  let fromEmail = req.body.email
  let subjectReceived = req.body.subject
  let message = req.body.message
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'devjbull@gmail.com',
    from: fromEmail,
    subject: subjectReceived,
    text: message
  };
  sgMail.send(msg);
}


module.exports = {
  msg: msg
} 