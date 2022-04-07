const connection = require('./connection');

const serialize = (sale) => ({
  saleId: sale.sale_id,
  date: sale.date,
  productId: sale.product_id,
  quantity: sale.quantity,
});

const getAll = async () => {
  const QUERY = `
    SELECT salesProducts.sale_id, sales.date, salesProducts.product_id, salesProducts.quantity
    FROM StoreManager.sales_products AS salesProducts
    INNER JOIN StoreManager.sales AS sales
    ON salesProducts.sale_id = sales.id
    ORDER BY sale_id, product_id;`;
  const [sales] = await connection.execute(QUERY);
  const serializedSales = sales.map((sale) => serialize(sale));
  return serializedSales;
};

const getById = async (id) => {
  const QUERY = `
    SELECT sales.date, salesProducts.product_id, salesProducts.quantity
    FROM StoreManager.sales_products AS salesProducts
    INNER JOIN StoreManager.sales AS sales
    ON salesProducts.sale_id = sales.id
    WHERE salesProducts.sale_id = ?
    ORDER BY salesProducts.sale_id;
  `;

  const [sale] = await connection.execute(
    QUERY, [id],
  );

  if (sale.length === 0) return null;

  const serializedSales = sale.map((s) => serialize(s));
  return serializedSales;
};

const create = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );

  product.forEach(async ({ productId, quantity }) => {
    await connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [insertId, productId, quantity],
    );
  });

  return {
    id: insertId,
    itemsSold: product,
  };
};

module.exports = {
  getAll,
  getById,
  create,
};