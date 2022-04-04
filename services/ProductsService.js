const Products = require('../models/ProductsModel');
const nameExists = require('../helpers/Products/nameExists');
const nameLength = require('../helpers/Products/nameLength');
const notFound = require('../error/notFound');

const getAll = async () => {
  const products = await Products.getAll();
  return products;
};

const getById = async (id) => {
  const product = await Products.getById(id);

  if (!product) {
    throw notFound('Product not found');
  }
  return product;
};

const getByName = async (name) => {
  const product = await Products.getByName(name);
  return product;
};

const create = async (product) => {
  await nameExists(product.name);
  nameLength(product.name);

  const { id } = await Products.create(product);
  return { id };
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
};
