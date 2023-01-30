const OrderService = require('../service/OrderService');

class OrderController {
  async create(req, res) {
    try {
      const { totalPrice, shop, products } = req.body;
      const { userId } = req;
      const order = await OrderService.create(totalPrice, shop, products, userId);
      res.json(order);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getUserOrders(req, res) {
    try {
      const { userId } = req;
      const orders = await OrderService.getUserOrders(userId);
      return res.json(orders);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
};

module.exports = new OrderController();