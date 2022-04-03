const Sales = require('../models/Sales');

const getAll = async () => {
  Sales.getAll();
};

const getById = async () => {
  const sale = await Sales.getById;

  if (!sale) {
    return {
      error: {
        code: 'notFound',
        message: 'Sale not found',
      },
    };
  }

  return sale;
};

module.exports = {
  getAll,
  getById,
};