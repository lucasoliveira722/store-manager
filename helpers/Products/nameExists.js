const Products = require('../../models/ProductsModel');
const alreadyExists = require('../../error/alreadyExists');

const nameExists = async (name) => {
  const product = await Products.getByName(name);

  if (product.length > 0) {
    throw alreadyExists('Product already exists');
  }
};

module.exports = nameExists;
