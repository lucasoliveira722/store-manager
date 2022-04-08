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

  describe('Test Get All', () => {
    it('Checks if the right data returns', async () => {
      sinon.stub(ProductsModels, 'getAll').resolves(productsListMock);
      const result = await ProductsServices.getAll();

      expect(result).to.be.equals(productsListMock);

      ProductsModels.getAll.restore();
    });
  })
})