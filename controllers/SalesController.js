const Sales = require('../services/SalesService');

const getAll = async (req, res, next) => {
  try {
    const sales = await Sales.getAll();
    res.status(200).json(sales);
  } catch (err) {
next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
  
    const sale = await Sales.getById(id);
  
    if (!sale) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(sale);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    // const { productId, quantity } = req.body;

    const newProduct = await Sales.create(req.body);

    return res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
  create,
};