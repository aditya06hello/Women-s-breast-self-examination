const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Twilio credentials
const twilioAccountSid = 'ACafc7f3777ad3d2dcd188f745f48890b8';
const twilioAuthToken = 'e9afd7759b466c6850d82548eb157112';
const twilioClient = new twilio(twilioAccountSid, twilioAuthToken);
const twilioPhoneNumber = '9546403928';

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'YOUR_EMAIL@gmail.com',
    pass: 'YOUR_EMAIL_PASSWORD',
  },
});

app.post('/contact', (req, res) => {
  const { firstName, lastName, company, email, phoneNumber, message } = req.body;

  // Send SMS
  twilioClient.messages.create({
    body: `New contact form submission: ${firstName} ${lastName}, ${company}, ${email}, ${phoneNumber}, ${message}`,
    from: twilioPhoneNumber,
    to: 'YOUR_PHONE_NUMBER',
  }).then(message => console.log(`SMS sent: ${message.sid}`))
    .catch(error => console.error(error));

  // Send Email
  const mailOptions = {
    from: 'YOUR_EMAIL@gmail.com',
    to: 'YOUR_EMAIL@gmail.com',
    subject: 'New Contact Form Submission',
    text: `New contact form submission:\n\nName: ${firstName} ${lastName}\nCompany: ${company}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log('Email sent: ' + info.response);
  });

  res.send('Form submitted successfully');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
