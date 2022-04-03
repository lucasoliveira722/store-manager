const Products = require('../models/Products');

const getAll = async () => {
  const products = await Products.getAll();
  return products;
};

const getById = async () => {
  const product = await Products.getById;

  if (!product) {
    return {
      error: {
        code: 'Not Found',
        message: 'Product not found',
      },
    };
  }

  return product;
};

module.exports = {
  getAll,
  getById,
};