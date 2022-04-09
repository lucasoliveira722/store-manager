const SalesModel = require('../../../models/SalesModel');
const connection = require('../../../models/connection');
const serialize = require('../../../helpers/Sales/serialize');
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
  ];

  afterEach(() => {
    connection.execute.restore();
  });

  describe('testing Get All', () => {
    it('check if returns all items', async () => {
      sinon.stub(connection, 'execute').resolves(salesListMock);
      sinon.stub(serialize, 'serialize')
        .onCall(0)
        .returns(salesListMock[0][0])
        .onCall(1)
        .returns(salesListMock[0][1])
        .onCall(2)
        .returns(salesListMock[0][2])
      const result = await SalesModel.getAll();
      console.log(result);
      console.log(salesListMock[0]);

      // expect(result).to.be.deep.equals(salesListMock[0]);
      expect(result).to.be.an('array');
    })
    afterEach(() => {
      serialize.serialize.restore();
    })
  })


  describe('Testing Get By Id', () => {
    it('checks if returns the right data for the Id', async () => {
      sinon.stub(connection, 'execute').resolves([salesByIdMock]);
      sinon.stub(serialize, 'serialize')
      .onCall(0)
      .returns(salesByIdMock[0])
      .onCall(1)
      .returns(salesByIdMock[1])
      const result = await SalesModel.getById(1)

      expect(result).to.be.deep.equals(salesByIdMock);
    })
  })
});