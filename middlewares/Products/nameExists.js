const Products = require('../../services/Products');

const nameExists = async (req, res, next) => {
  const name = req.body;

  const product = await Products.getByName(name);

  if (product) {
    return res.status(409).json({ message: 'Product already exists' });
  }
  next();
};

module.exports = nameExists;