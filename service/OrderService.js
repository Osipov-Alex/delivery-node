const Order = require('../models/Order');
const User = require('../models/User');

class OrderService {
  async create(totalPrice, shop, products, userId) {
    const newOrder = await Order.create({ totalPrice, shop, products: products });
    await User.findByIdAndUpdate(userId, {
      $push: { orders: newOrder },
    })
    return { newOrder, status: 'Спасибо за покупку.' };
  }

  async getUserOrders(userId) {
    const user = await User.findById(userId);
    const orderList = await Promise.all(
      user.orders.map((order) => {
        return Order.findById(order._id)
      })
    );
    return orderList;
  }
};

module.exports = new OrderService();
