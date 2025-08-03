import { Router } from 'express';
import { handleSendEmail } from '../controllers/mailerController.js';

const router = Router();

router.post('/send', handleSendEmail);

export default router;
