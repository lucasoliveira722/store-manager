const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return products;
};

const getById = async (id) => {
  const [product] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [id],
  );

  if (product.length === 0) return null;

  return product[0];
};

const getByName = async (name) => {
  const [product] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE name = ?',
    [name],
  );
  return product;
};

const create = async ({ name, quantity }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)',
    [name, quantity],
  );
  return {
    id: insertId,
    name,
    quantity,
  };
};

const update = async (product) => {
  const { name, quantity, id } = product;
  await connection.execute(
    'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?', [name, quantity, id],
  );
  return product;
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  update,
};
