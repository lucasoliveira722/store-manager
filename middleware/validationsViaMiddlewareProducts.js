const smallLength = require('../error/smallLength');
const noAttribute = require('../error/noAttribute');

const nameValidation = (req, _res, next) => {
  const { name } = req.body;

  if (name && name.length < 5) {
    throw smallLength('"name" length must be at least 5 characters long');
  }
  next();
};

const nameValidationZero = (req, _res, next) => {
  const { name } = req.body;

  if (!name) {
    throw noAttribute('"name" is required');
  }
  next();
};

const quantityValidation = (req, _res, next) => {
  const { quantity } = req.body;

  if (quantity && (quantity <= 0)) {
    throw smallLength('"quantity" must be greater than or equal to 1');
  }
  next();
};

const quantityValidationZero = (req, _res, next) => {
  const { quantity } = req.body;

  if (!quantity) {
    throw noAttribute('"quantity" is required');
  }
  next();
};

module.exports = {
  nameValidation,
  nameValidationZero,
  quantityValidation,
  quantityValidationZero,
};