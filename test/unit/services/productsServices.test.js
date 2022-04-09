const { expect } = require("chai");
const { describe } = require("mocha");
const sinon = require("sinon");
const ProductsServices = require("../../../services/ProductsService");
const ProductsModels = require('../../../models/ProductsModel');

describe('Products Services', () => {
  const productsListMock = [
    {
      "id": 1,
      "name": "Martelo de Thor",
      "quantity": 10
    },
    {
      "id": 2,
      "name": "Traje de encolhimento",
      "quantity": 20
    },
    {
      "id": 3,
      "name": "Escudo do Capitão América",
      "quantity": 30
    }
  ];

  const productsByIdMock = {
    "id": 1,
    "name": "Martelo de Thor",
    "quantity": 10
  }

  describe('Test Get All', () => {
    it('Checks if all data returns', async () => {
      sinon.stub(ProductsModels, 'getAll').resolves(productsListMock);
      const result = await ProductsServices.getAll();

      expect(result).to.be.equals(productsListMock);

      ProductsModels.getAll.restore();
    });
  })

  describe('Test Get By Id', () => {
    it('Checks if the right data returns for the Id', async () => {
      sinon.stub(ProductsModels, 'getById').resolves(productsByIdMock);
      const result = await ProductsServices.getById();

      expect(result.error).to.be.false;
      expect(result.code).to.be.equals(200);
      expect(product.error).to.be.equals(productsByIdMock);

      ProductsModels.getById.restore();
    });
  })
})