import express from 'express';
import {
  subscribe,
  getSubscribers,
  unsubscribe,
} from '../controllers/newsletterController.js';
import { protect } from '../middlewares/auth.js';
import { roleCheck } from '../middlewares/roleCheck.js';

const router = express.Router();

// Public routes
router.post('/subscribe', subscribe);
router.delete('/unsubscribe/:email', unsubscribe);

// Admin routes
router.get('/subscribers', protect, roleCheck('admin'), getSubscribers);

export default router;
