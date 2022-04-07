const smallLength = require('../error/smallLength');
const noAttribute = require('../error/noAttribute');

const productIdValidation = (req, res, next) => {
  const { productId } = req.body;

  if (!productId) {
    throw noAttribute('"productId" is required');
  }
  next();
};

const quantityValidationSales = (req, _res, next) => {
  const { quantity } = req.body;

  if (quantity && (quantity <= 0)) {
    throw smallLength('"quantity" must be greater than or equal to 1');
  }
  next();
};

const quantityValidationZeroSales = (req, _res, next) => {
  const { quantity } = req.body;

  if (!quantity) {
    throw noAttribute('"quantity" is required');
  }
  next();
};

module.exports = {
  productIdValidation,
  quantityValidationSales,
  quantityValidationZeroSales,
};