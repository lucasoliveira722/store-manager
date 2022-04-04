const Products = require('../models/Products');
const { nameExists } = require('../middlewares/Products');

const getAll = async () => {
  const products = await Products.getAll();
  return products;
};

const getById = async (id) => {
  const product = await Products.getById(id);

  return product;
};

const getByName = async (name) => {
  const product = await Products.getByName(name);
  return product;
};

const create = async (product) => {
  const { name, quantity } = product;

  const exists = await nameExists(name);

  if (exists) {
    return { error: 409, message: 'Product already exists' };
  }
  const newProduct = await Products.create(name, quantity);
  return { code: 201, newProduct };
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
};
