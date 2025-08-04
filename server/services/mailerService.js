import transporter from '../config/mailerConfig.js';

export const sendTestEmail = async ({ email, firstName, lastName, phone, message }) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email, 
      subject: 'Ново съобщение от контактната форма',
      html: `
        <h2>Контактна информация</h2>
        <p><strong>Име:</strong> ${firstName} ${lastName}</p>
        <p><strong>Имейл:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Съобщение:</strong></p>
        <p>${message}</p>
        `,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error('Transporter error:', error);
    throw error;
  }
};