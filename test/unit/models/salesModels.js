const SalesModel = require('../../../models/SalesModel');
const connection = require('../../../models/connection')
const { expect } = require('chai');
const sinon = require('sinon');

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

  afterEach(() => {
    connection.execute.restore();
  });

  describe('testing Get All', () => {
    it('check if returns all items', async () => {
      sinon.stub(connection, 'execute').resolves(salesListMock);
      const result = await SalesModel.getAll();

      expect(result).to.be.deep.equals(salesListMock);
    })
  })


  describe('Testing Get By Id', () => {
    it('checks if returns the right data for the Id', async () => {
      sinon.stub(connection, 'execute').resolves([]);
      const result = await SalesModel.getById(1)

      expect(result).to.be.equals(salesByIdMock);
    })
  })
});