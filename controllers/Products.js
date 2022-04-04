const Products = require('../services/Products');

const getAll = async (req, res) => {
  const products = await Products.getAll();

  res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const product = await Products.getById(id);

  if (!product) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(product);
};

const create = async (req, res) => {
  const { name, quantity } = req.body;
  const { id } = await Products.create({ name, quantity });
  return res.status(201).json({ id, name, quantity });
};

module.exports = {
  getAll,
  getById,
  create,
};