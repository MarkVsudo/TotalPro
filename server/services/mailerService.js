import transporter from "../config/mailerConfig.js";

export const sendContactFormEmail = async ({
  email,
  firstName,
  lastName,
  phone,
  message,
}) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      replyTo: email,
      to: process.env.SMTP_USER,
      subject: "Ново съобщение от контактна форма",
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
                Получено на: ${new Date().toLocaleString("bg-BG")}
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Transporter error:", error);
    throw error;
  }
};

export const sendOrderConfirmationEmail = async ({
  email,
  orderNumber,
  firstName,
  lastName,
  paymentType,
  total,
  items, // [{ product_name, qty, unit_price, options }]
  address,
  city,
  postal,
  country,
}) => {
  const paymentTypeLabel =
    {
      "on-delivery": "Наложен платеж",
      "with-card": "Плащане с карта (myPos)",
      "bank-transfer": "Банков превод",
      "on-lease": "Изплащане чрез tbi bank",
    }[paymentType] ?? paymentType;

  const bankDetails =
    paymentType === "bank-transfer"
      ? `
    <div style="margin-top:16px;background:#f0f7ff;border:1px solid #bfdbfe;border-radius:8px;padding:16px;">
      <p style="margin:0 0 8px;font-weight:600;color:#1e3a5f;font-size:14px;">Банкови реквизити за превод:</p>
      <table style="font-size:13px;color:#374151;border-collapse:collapse;width:100%;">
        <tr><td style="padding:3px 12px 3px 0;color:#6b7280;">Получател:</td><td style="font-weight:500;">ТОТАЛ ПРО ЕООД</td></tr>
        <tr><td style="padding:3px 12px 3px 0;color:#6b7280;">Банка:</td><td style="font-weight:500;">Пощенска банка АД</td></tr>
        <tr><td style="padding:3px 12px 3px 0;color:#6b7280;">IBAN:</td><td style="font-weight:500;">BG00BPBI00000000000000</td></tr>
        <tr><td style="padding:3px 12px 3px 0;color:#6b7280;">BIC:</td><td style="font-weight:500;">BPBIBGSF</td></tr>
        <tr><td style="padding:3px 12px 3px 0;color:#6b7280;">Основание:</td><td style="font-weight:500;">Поръчка №${orderNumber}</td></tr>
      </table>
    </div>
  `
      : "";

  const itemsRows = items
    .map(
      (item) => `
    <tr>
      <td style="padding:12px 8px;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;">
        ${item?.product_name}
        ${item.options.installation ? `<br><span style="font-size:12px;color:#9ca3af;">С монтаж</span>` : "Без монтаж"}
      </td>
      <td style="padding:12px 8px;border-bottom:1px solid #f3f4f6;font-size:14px;color:#6b7280;text-align:center;">${item.qty}</td>
      <td style="padding:12px 8px;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;text-align:right;white-space:nowrap;">${(item.unit_price * item.qty).toFixed(2)} €</td>
    </tr>
  `,
    )
    .join("");

  const html = `
<!DOCTYPE html>
<html lang="bg">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Потвърждение на поръчка №${orderNumber}</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background:#002B5B;border-radius:12px 12px 0 0;padding:28px 40px;text-align:center;">
              <img src="https://res.cloudinary.com/dh1arjjjy/image/upload/v1773685501/nav-logo-2_ghqmm4.png" alt="Лого" style="height:48px;display:block;margin:0 auto;" />
            </td>
          </tr>

          <!-- GREEN BANNER -->
          <tr>
            <td style="background:#16a34a;padding:18px 40px;text-align:center;">
              <p style="margin:0;color:#fff;font-size:16px;font-weight:600;letter-spacing:0.3px;">
                ✓ &nbsp;Поръчката ти е получена успешно!
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:#ffffff;padding:36px 40px;">

              <p style="margin:0 0 6px;font-size:22px;font-weight:700;color:#111827;">
                Здравей, ${firstName}!
              </p>
              <p style="margin:0 0 24px;font-size:14px;color:#6b7280;">
                Получихме поръчка <strong style="color:#002B5B;">№${orderNumber}</strong>. По-долу ще намериш всички детайли.
              </p>

              <!-- ORDER ITEMS -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;margin-bottom:24px;">
                <thead>
                  <tr style="background:#f9fafb;">
                    <th style="padding:10px 8px;font-size:12px;color:#6b7280;text-align:left;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Продукт</th>
                    <th style="padding:10px 8px;font-size:12px;color:#6b7280;text-align:center;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Бр.</th>
                    <th style="padding:10px 8px;font-size:12px;color:#6b7280;text-align:right;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Сума</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsRows}
                </tbody>
                <tfoot>
                  <tr style="background:#f9fafb;">
                    <td colspan="2" style="padding:12px 8px;font-size:15px;font-weight:700;color:#111827;">Общо</td>
                    <td style="padding:12px 8px;font-size:15px;font-weight:700;color:#002B5B;text-align:right;white-space:nowrap;">${Number(total).toFixed(2)} €</td>
                  </tr>
                </tfoot>
              </table>

              <!-- TWO COLUMNS: Delivery + Payment -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
                <tr>
                  <td width="48%" valign="top" style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;">
                    <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;">Адрес за доставка</p>
                    <p style="margin:0;font-size:14px;color:#111827;line-height:1.6;">
                      ${firstName} ${lastName}<br>
                      ${address}<br>
                      ${city}, ${postal}<br>
                      ${country}
                    </p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" valign="top" style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;">
                    <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;">Начин на плащане</p>
                    <p style="margin:0;font-size:14px;color:#111827;">${paymentTypeLabel}</p>
                  </td>
                </tr>
              </table>

              ${bankDetails}

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#f9fafb;border-top:1px solid #e5e7eb;border-radius:0 0 12px 12px;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;color:#6b7280;">
                Въпроси? Свържи се с нас на <a href="mailto:${process.env.SMTP_USER}" style="color:#002B5B;font-weight:600;">${process.env.SMTP_USER}</a>
              </p>
              <p style="margin:0;font-size:12px;color:#9ca3af;">
                © ${new Date().getFullYear()} ТОТАЛ ПРО ЕООД. Всички права запазени.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  try {
    const mailOptions = {
      from: `"ТОТАЛ ПРО" <${process.env.SMTP_USER}>`,
      replyTo: process.env.SMTP_USER,
      to: email,
      subject: `Поръчка №${orderNumber} е получена ✓`,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Transporter error:", error);
    throw error;
  }
};
