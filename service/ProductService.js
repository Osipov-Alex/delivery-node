const Product = require('../models/Product');
const ImageService = require('./ImageService');

class ProductService {
  async create(product, image) {
    const fileName = ImageService.saveFile(image);
    const createProduct = await Product.create({ ...product, image: fileName });
    return createProduct;
  }

  async getAll() {
    const products = await Product.find();
    return products;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Don't haven't id");
    }
    const product = await Product.findById(id);
    return product;
  }

  async update(product) {
    if (!product._id) {
      throw new Error("Id don't found");
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      product._id,
      product,
      { new: true },
    );
    return updatedProduct;
  }

  async delete(id) {
    if (!id) {
      throw new Error("Id don't found");
    }
    const product = await Product.findByIdAndDelete(id);
    return product;
  }
}

module.exports = new ProductService();
