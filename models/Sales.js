const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
    'SELECT saleId, date, productId, quantity FROM StoreManager.sales ORDER BY saleId, productId;',
  );
  return sales;
};

const getById = async (id) => {
  const [sale] = await connection.execute(
    'SELECT saleId, date, productId, quantity FROM StoreManager.sales WHERE salesId = ?;', [id],
  );

  if (sale.length === 0) return null;

  return sale;
};

module.exports = {
  getAll,
  getById,
};