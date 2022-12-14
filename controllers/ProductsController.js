const Products = require('../services/ProductsService');

const getAll = async (req, res, next) => {
  try {
    const products = await Products.getAll();
    // console.log(products);
    return res.status(200).json(products);
  } catch (err) {
    // console.log(err);
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Products.getById(id);
  
    return res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const { id } = await Products.create({ name, quantity });
    return res.status(201).json({ id, name, quantity });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    await Products.update({ id, name, quantity });
    return res.status(200).json({ id, name, quantity });
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Products.deleteProduct(id);
    return res.status(204).json();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteProduct,
};

// Try/catch em todas as controllers, para verificação de erro CHECK
// Criar middleware de erro (seguir vídeo) CHECK
// Criar validações de tipo e etc na camada Service
