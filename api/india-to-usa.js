import nodemailer from 'nodemailer';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default async function handler(req, res) {
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  }

  const { name, email, mobile, city, parcel_weight, message } = req.body || {};

  if (!name || !email || !mobile) {
    return res.status(400).json({
      success: false,
      message: 'Required fields are missing.',
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      bcc: 'ashish@itdservices.in',
      replyTo: email,
      subject: `India to USA Quote — ${name}`,
      html: `
        <h2>India to USA Quote Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mobile:</strong> ${escapeHtml(mobile)}</p>
        <p><strong>City:</strong> ${escapeHtml(city)}</p>
        <p><strong>Parcel Weight:</strong> ${escapeHtml(parcel_weight)}</p>
        <p><strong>Message:</strong> ${escapeHtml(message)}</p>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for your India to USA enquiry — Shyp Byte',
      html: `
        <h2>Thank You</h2>
        <p>Dear ${escapeHtml(name)},</p>
        <p>We received your India to USA shipping enquiry. Our team will contact you shortly.</p>
        <br>
        <p>Regards,</p>
        <p>Shyp Byte Team</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
    });
  }
}
