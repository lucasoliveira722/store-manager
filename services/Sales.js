const Sales = require('../models/Sales');

const getAll = async () => {
  const sales = await Sales.getAll();
  return sales;
};

const getById = async (id) => {
  const sale = await Sales.getById(id);

  if (!sale) {
    return {
      error: {
        code: 'Not Found',
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