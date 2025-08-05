import transporter from '../config/mailerConfig.js';

export const sendContactFormEmail = async ({ email, firstName, lastName, phone, message }) => {
  try {
    const mailOptions = {
      from: email,
      to: process.env.SMTP_USER,
      subject: 'Ново съобщение от контактна форма',
      html: `
        <!DOCTYPE html>
        <html lang="bg">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Контактна форма</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f8f9fa;
            }
            
            .email-container {
              max-width: 600px;
              margin: 20px auto;
              background: white;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0, 43, 91, 0.1);
            }
            
            .header {
              padding: 30px 20px;
              text-align: center;
              position: relative;
            }
            
            .header::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
              opacity: 0.3;
            }
            
            .logo {
              position: relative;
              z-index: 2;
              margin-bottom: 15px;
            }
            
            .logo img {
              max-height: 60px;
              height: auto;
              filter: brightness(0) invert(1);
            }
            
            .header-title {
              color: #002B5B;
              font-size: 24px;
              font-weight: 600;
              margin: 0;
              position: relative;
              z-index: 2;
              text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            }
            
            .content {
              padding: 40px 30px;
            }
            
            .info-grid {
              display: grid;
              gap: 20px;
              margin-bottom: 30px;
            }
            
            .info-item {
              background: #f8f9fa;
              padding: 20px;
              border-radius: 8px;
              border-left: 4px solid #002B5B;
              transition: transform 0.2s ease;
            }
            
            .info-item:hover {
              transform: translateX(2px);
            }
            
            .info-label {
              font-weight: 600;
              color: #002B5B;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 8px;
              display: block;
            }
            
            .info-value {
              color: #333;
              font-size: 16px;
              word-wrap: break-word;
            }
            
            .message-section {
              background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
              padding: 25px;
              border-radius: 10px;
              border: 1px solid #e9ecef;
              margin-top: 20px;
            }
            
            .message-title {
              color: #002B5B;
              font-size: 18px;
              font-weight: 600;
              margin-bottom: 15px;
              display: flex;
              align-items: center;
            }
            
            .message-title::before {
              content: '💬';
              margin-right: 10px;
              font-size: 20px;
            }
            
            .message-content {
              color: #444;
              font-size: 15px;
              line-height: 1.7;
              white-space: pre-wrap;
              background: white;
              padding: 20px;
              border-radius: 6px;
              border: 1px solid #e9ecef;
            }
            
            .footer {
              background: #f8f9fa;
              padding: 25px 30px;
              text-align: center;
              border-top: 1px solid #e9ecef;
            }
            
            .footer-text {
              color: #6c757d;
              font-size: 13px;
              margin: 0;
            }
            
            .timestamp {
              color: #002B5B;
              font-weight: 500;
              font-size: 14px;
              margin-top: 10px;
            }
            
            @media (max-width: 600px) {
              .email-container {
                margin: 10px;
                border-radius: 8px;
              }
              
              .content {
                padding: 25px 20px;
              }
              
              .header {
                padding: 25px 15px;
              }
              
              .header-title {
                font-size: 20px;
              }
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <div class="logo">
                <img src="cid:navlogo" alt="Logo">
              </div>
              <h1 class="header-title">Ново съобщение от контактна форма</h1>
            </div>
            
            <div class="content">
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">Име</span>
                  <div class="info-value">${firstName} ${lastName}</div>
                </div>
                
                <div class="info-item">
                  <span class="info-label">Имейл адрес</span>
                  <div class="info-value">${email}</div>
                </div>
                
                <div class="info-item">
                  <span class="info-label">Телефон</span>
                  <div class="info-value">+359${phone}</div>
                </div>
              </div>
              
              <div class="message-section">
                <h3 class="message-title">Съобщение</h3>
                <div class="message-content">${message}</div>
              </div>
            </div>
            
            <div class="footer">
              <p class="footer-text">
                Това съобщение е изпратено автоматично от контактната форма на вашия уебсайт.
              </p>
              <div class="timestamp">
                Получено на: ${new Date().toLocaleString('bg-BG')}
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: 'nav-logo-2.png',
          path: '../client/src/assets/nav-logo-2.png', // adjust path as needed
          cid: 'navlogo'
        }
      ]
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error('Transporter error:', error);
    throw error;
  }
};