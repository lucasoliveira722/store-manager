const { expect } = require("chai");
const { describe } = require("mocha");
const sinon = require("sinon");
const ProductsController = require('../../../controllers/ProductsController');
const ProductsServices = require("../../../services/ProductsService");

describe('Products Controllers', () => {
  const response = {};
  const request = {};
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

  const emptyProductsMock = [];

  const productsByIdMock = {
    "id": 1,
    "name": "Martelo de Thor",
    "quantity": 10
  }

  before(() => {
    response.status = stub().returns(response);
    response.json = stub().returns(response);
    response.end = stub();
  });

  describe('Test Get All', () => {
    before(() => {
      request.body = {};
      sinon.stub(ProductsServices, 'getAll').resolves(productsListMock);
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });

    after(() => {
      ProductsServices.getAll.restore()
    })
  });

  it('Receives status code of 200', async () => {
    await ProductsController.getAll(request, response);
    expect(response.status.calledWith(200)).to.be.true;
  });
});