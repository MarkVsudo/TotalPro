import { Router } from 'express';
import { handleContactFormEmail } from '../controllers/mailerController.js';

const router = Router();

router.post('/send', handleContactFormEmail);

export default router;
