const { expect } = require("chai");
const { describe } = require("mocha");
const sinon = require("sinon");
const SalesServices = require("../../../services/SalesService");
const SalesModels = require('../../../models/SalesModel');

describe('Sales model', () => {
  const salesListMock = [
    [
      {
        "saleId": 1,
        "date": "2022-04-08T21:59:56.000Z",
        "productId": 1,
        "quantity": 5
      },
      {
        "saleId": 1,
        "date": "2022-04-08T21:59:56.000Z",
        "productId": 2,
        "quantity": 10
      },
      {
        "saleId": 2,
        "date": "2022-04-08T21:59:56.000Z",
        "productId": 3,
        "quantity": 15
      }
    ]
  ];

  const salesByIdMock = [
    {
      "date": "2022-04-08T21:59:56.000Z",
      "productId": 1,
      "quantity": 5
    },
    {
      "date": "2022-04-08T21:59:56.000Z",
      "productId": 2,
      "quantity": 10
    }
  ]

  describe('testing Get All', () => {
    it('check if returns all items', async () => {
      sinon.stub(SalesModels, 'getAll').resolves(salesListMock);
      const result = await SalesServices.getAll();

      expect(result).to.be.equals(salesListMock);
      SalesModels.getAll.restore();
    })
  })
});