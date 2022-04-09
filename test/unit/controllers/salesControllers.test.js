const { expect } = require("chai");
const { describe } = require("mocha");
const sinon = require("sinon");
const SalesController = require('../../../controllers/SalesController');
const SalesServices = require("../../../services/SalesService");

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
  ];

  const request = {};
  const response = {};

  before(() => {
    response.statusCode = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);
  })
});