import path from 'node:path'; // importa pacotes nativos

import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrder } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

// salva os arq na maquina
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  })
});

// padrao no rest
// nome da rota no plural

// list categories
// router.get('/caregories', (req, res) => {
//   res.send('OK');
// });
router.get('/categories', listCategories);

// create category
router.post('/categories', createCategory);

// list products
router.get('/products', listProducts);

// create products
router.post('/products', upload.single('image'), createProduct);

// get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// list orders
router.get('/orders', listOrder);

// create order
router.post('/orders', createOrder);

// change order status
router.patch('/orders/:orderId', changeOrderStatus);

//  delete/cancel order
router.delete('/orders/:orderId', cancelOrder);
