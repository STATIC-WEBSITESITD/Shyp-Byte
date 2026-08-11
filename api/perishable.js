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

  const {
    name,
    email,
    mobile,
    company,
    sender_type,
    shipment_weight,
    goods,
  } = req.body || {};

  if (!name || !email || !mobile || !sender_type || !shipment_weight || !goods) {
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
      subject: `New Perishable Enquiry from ${name} | ${sender_type}`,
      html: `
        <h2>Perishable Courier Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mobile:</strong> ${escapeHtml(mobile)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Sender Type:</strong> ${escapeHtml(sender_type)}</p>
        <p><strong>Shipment Weight:</strong> ${escapeHtml(shipment_weight)}</p>
        <p><strong>Goods:</strong> ${escapeHtml(goods)}</p>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for your perishable courier enquiry — Shyp Byte',
      html: `
        <h2>Thank You</h2>
        <p>Dear ${escapeHtml(name)},</p>
        <p>We received your perishable shipping enquiry. Our team will contact you shortly.</p>
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
