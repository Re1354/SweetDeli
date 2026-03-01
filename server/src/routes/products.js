import express from 'express';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import { protect } from '../middlewares/auth.js';
import { roleCheck } from '../middlewares/roleCheck.js';

const router = express.Router();

// Public routes
router.get('/', getProducts);
router.get('/:id', getProduct);

// Admin routes
router.post('/', protect, roleCheck('admin'), createProduct);
router.put('/:id', protect, roleCheck('admin'), updateProduct);
router.delete('/:id', protect, roleCheck('admin'), deleteProduct);

export default router;
