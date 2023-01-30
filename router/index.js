const Router = require('express');
const { body } = require('express-validator');
const OrderController = require('../controllers/OrderController');
const ProductsController = require('../controllers/ProductsController');
const ShopController = require('../controllers/ShopController');
const UserController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/AuthMiddlewear');


const router = new Router();
// Юзер
router.post('/register',
  body('email').isEmail(),
  body('password').isLength({min: 4, max: 10}),
  UserController.registration
);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.get('/activate/:link', UserController.activate);
router.get('/refresh', UserController.refresh);
router.get('/users', authMiddleware, UserController.getUsers);
// Продукты
router.post('/products', ProductsController.create);
router.get('/products', ProductsController.getAll);
router.get('/products/:id', ProductsController.getOne);
router.put('/products', ProductsController.update);
router.delete('/products/:id', ProductsController.delete);
// Магазины
router.post('/shops', ShopController.create);
router.get('/shops', ShopController.getAll);
router.get('/shops/:id', ShopController.getOne);
router.put('/shops', ShopController.update);
router.delete('/shops/:id', ShopController.delete);
// Заказ
router.post('/order', authMiddleware, OrderController.create);
router.get('/orders', authMiddleware, OrderController.getUserOrders)

module.exports = router;