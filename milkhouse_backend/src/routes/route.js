import express from 'express';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { signup } from '../controller/user-controller.js';
const router = express.Router();

router.get('/products', getProducts);
router.get('/product/:id', getProductById);
router.post('/signup', signup);

export default router;