const Products = require('../models/ProductsModel');
const nameExists = require('../helpers/Products/nameExists');
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

  const { id } = await Products.create(product);
  return { id };
};

const update = async (product) => {
  const alreadyExists = await Products.getById(product.id);
  if (!alreadyExists) {
    throw notFound('Product not found');
  }
  const updated = await Products.update(product);
  return updated;
};

const deleteProduct = async (id) => {
  const exists = await Products.getById(id);
  if (!exists) {
    throw notFound('Product not found');
  }
  await Products.deleteProduct(id);
  return {};
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  update,
  deleteProduct,
};

// CHECK