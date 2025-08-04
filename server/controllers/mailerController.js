import { sendTestEmail } from '../services/mailerService.js';

export const handleSendEmail = async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    
    try {
      const info = await sendTestEmail({ firstName, lastName, email, phone, message });
      res.status(200).json({ message: 'Email sent', info });
    } catch (err) {
      console.error('Email error:', err); 
      res.status(500).json({ error: 'Failed to send email' });
    }
}