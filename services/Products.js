const Products = require('../models/Products');

const getAll = async () => {
  Products.getAll();
};

const getById = async () => {
  const product = await Products.getById;

  if (!product) {
    return {
      error: {
        code: 'notFound',
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