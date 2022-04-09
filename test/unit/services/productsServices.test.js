const { expect } = require("chai");
const sinon = require("sinon");
const connection = require('../../../models/connection');
const ProductsServices = require("../../../services/ProductsService");
const ProductsModels = require('../../../models/ProductsModel');

describe('Products Services', () => {
  const productsListMock = [
    {"id": 1, "name": "Martelo de Thor", "quantity": 10},
    {"id": 2, "name": "Traje de encolhimento", "quantity": 20},
    {"id": 3, "name": "Escudo do Capitão América", "quantity": 30}
  ];

  const productsByIdMock = [{"id": 1, "name": "Martelo de Thor", "quantity": 10}]

  describe('Test Get All', () => {
    it('Checks if all data returns', async () => {
      sinon.stub(ProductsModels, 'getAll').resolves(productsListMock);
      const result = await ProductsServices.getAll();

      expect(result).to.be.deep.equals(productsListMock);

      ProductsModels.getAll.restore();
    });
  })

  describe('Test Get By Id', () => {
    it('Checks if the right data returns for the Id', async () => {
      sinon.stub(ProductsModels, 'getById').resolves(productsByIdMock);
      const result = await ProductsServices.getById(1);

      expect(result).to.be.deep.equals(productsByIdMock)

      ProductsModels.getById.restore();
    });
  })

  describe('Test Get By Name', () => {
    it('Checks if the right data returns for the Name', async () => {
      sinon.stub(ProductsModels, 'getByName').resolves(productsByIdMock);
      const result = await ProductsServices.getByName('Martelo de Thor');

      expect(result).to.be.deep.equals(productsByIdMock)

      ProductsModels.getByName.restore();
    });
  })
})