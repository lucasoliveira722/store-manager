const ProductsModel = require('../../../models/ProductsModel');
const connection = require('../../../models/connection')
const { expect } = require('chai');
// const { before } = require('mocha')
const sinon = require('sinon');

describe('Products model', () => {
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

  afterEach(() => {
    connection.execute.restore();
  });

  describe('Testing Get All', () => {
    it('check if returns all items', async () => {
      sinon.stub(connection, 'execute').resolves(productsListMock);
      const result = await ProductsModel.getAll();
  
      expect (result).to.be.deep.equals(productsListMock[0]);
    })
  })

  describe('Testing create', () => {
    it('checks if returns the right info', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 4 }])
      const result = await ProductsModel.create({name: 'Traje do Homem de Ferro', quantity: 2});

      expect(result.id).to.be.equals(4);
      expect(result.name).to.be.equals('Traje do Homem de Ferro');
      expect(result.quantity).to.be.equals(2);
    })
  });
})