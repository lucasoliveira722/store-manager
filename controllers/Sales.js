const Sales = require('../services/Sales');

const getAll = async (req, res) => {
  const sales = await Sales.getAll();

  res.status(200).json(sales);
};

const getById = async (req, res, next) => {
  const { id } = req.params;

  const sale = await Sales.getById(id);

  if (!sale) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(sale);
};

module.exports = {
  getAll,
  getById,
};