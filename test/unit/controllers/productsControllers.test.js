const sinon = require("sinon");
const { expect } = require("chai");

const ProductsController = require("../../../controllers/ProductsController");
const ProductsServices = require("../../../services/ProductsService");

describe("Products Controllers", () => {
  const productsListMock = [
    { id: 1, name: "Martelo de Thor", quantity: 10 },
    { id: 2, name: "Traje de encolhimento", quantity: 20 },
    { id: 3, name: "Escudo do Capitão América", quantity: 30 },
  ];

  const productsByIdMock = { id: 1, name: "Martelo de Thor", quantity: 10 };

  const response = {};
  const request = {};
  const next = {};

  beforeEach(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);
    sinon.stub(ProductsServices, "getAll").resolves(productsListMock);
  });

  describe("Test Get All", () => {

    afterEach(() => {
      ProductsServices.getAll.restore();
    });

    it("Receives status code of 200", async () => {
      await ProductsController.getAll(request, response, next);
      // console.log(response.status);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith(productsListMock[0]));
    });
  });
});
