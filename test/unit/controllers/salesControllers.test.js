const { expect } = require("chai");
const sinon = require("sinon");

const SalesController = require('../../../controllers/SalesController');
const SalesServices = require("../../../services/SalesService");

describe('Sales model', () => {
  const salesListMock = [
      {"saleId": 1, "date": "2022-04-08T21:59:56.000Z", "productId": 1, "quantity": 5},
      {"saleId": 1, "date": "2022-04-08T21:59:56.000Z", "productId": 2, "quantity": 10},
      {"saleId": 2, "date": "2022-04-08T21:59:56.000Z", "productId": 3, "quantity": 15},
    ]
  ;

  const salesByIdMock = [
    {"date": "2022-04-09T14:05:25.000Z", "productId": 3, "quantity": 15}
  ];

  const response = {};
  const request = { params: { id: 2 }};
  const next = {};

  beforeEach(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);
    sinon.stub(SalesServices, "getAll").resolves(salesListMock);
  });

  describe("Test Get All", () => {
    afterEach(() => {
      SalesServices.getAll.restore();
    })
    it('Receives Status code of 200', async () => {
      await SalesController.getAll(request, response, next);
      expect(response.status.calledWith(200)).to.be.equal(true);
    })
  });

  describe("Test Get By Id", () => {
    beforeEach(() => {
      sinon.stub(SalesServices, "getById").resolves(salesByIdMock)
    });
    afterEach(() => {
      SalesServices.getById.restore();
    });

    it("Receives Status Code of 200", async () => {
      await SalesController.getById(request, response, next);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
});