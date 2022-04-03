const Products = require('../services/Products');

const getAll = async (req, res) => {
  const products = await Products.getAll();

  res.status(200).json(products);
};

const getById = async (req, res, next) => {
  const { id } = req.params;

  const product = await Products.getById(id);

  if (product.error) return next(product.error);
  return res.status(200).json(product);
};

module.exports = {
  getAll,
  getById,
};