import nodemailer from 'nodemailer';

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail app password
  },
});

export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'tonystanks121@gmail.com',
      subject: 'New Contact Form Submission - Scylla',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <hr>
        <p><em>This message was sent from your Scylla website contact form.</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact notification email sent');
    return true;
  } catch (error) {
    console.error('Error sending contact email:', error);
    return false;
  }
}

export async function sendBookingNotification(data: {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
}) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'tonystanks121@gmail.com',
      subject: 'New Appointment Booking - Scylla',
      html: `
        <h2>New Appointment Booking</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        <hr>
        <p><em>This booking was made through your Scylla website.</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Booking notification email sent');
    return true;
  } catch (error) {
    console.error('Error sending booking email:', error);
    return false;
  }
} 
