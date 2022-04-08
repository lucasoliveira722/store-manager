const Sales = require('../models/SalesModel');

const getAll = async () => {
  const sales = await Sales.getAll();
  return sales;
};

const getById = async (id) => {
  const sale = await Sales.getById(id);

  return sale;
};

const create = async (product) => {
  const newSale = await Sales.create(product);
  return newSale;
};

const update = async (id, product) => {
  const updated = await Sales.update(id, product);
  return updated;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};