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
  try {
    sgMail.send(msg);
    
  } catch(err) {
    console.log(err)
    res.status(500).json({message: 'Something went wrong.'})
  }
  res.send(200).json({message: 'Success!'})
}


module.exports = {
  msg: msg
} 