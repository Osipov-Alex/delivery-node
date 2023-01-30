const ShopService = require('../service/ShopService');

class ShopController {
  async create(req, res) {
    try {
      const shop = await ShopService.create(req.body);
      res.json(shop);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const shop = await ShopService.getAll();
      return res.json(shop);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const shop = await ShopService.getOne(req.params.id);
      res.json(shop);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedShop = await ShopService.update(req.body);
      return res.json(updatedShop);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const shop = await ShopService.delete(req.params.id);
      return res.json(shop);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}

module.exports = new ShopController();
