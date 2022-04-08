require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');

const Products = require('./controllers/ProductsController');
const Sales = require('./controllers/SalesController');
const middlewareError = require('./middleware/Error');

const app = express();
app.use(bodyParser.json());

const {
  nameValidation,
  nameValidationZero,
  quantityValidation,
  quantityValidationZero,
} = require('./middleware/validationsViaMiddlewareProducts');

const {
  productIdValidation,
  quantityValidationSales,
  quantityValidationZeroSales,
} = require('./middleware/validationsViaMiddlewareSales');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', Products.getAll);
app.get('/products/:id', Products.getById);
app.post('/products',
  nameValidation,
  nameValidationZero,
  quantityValidationZero,
  quantityValidation, Products.create);
app.put('/products/:id',
  nameValidation,
  nameValidationZero,
  quantityValidationZero,
  quantityValidation, Products.update);
app.delete('/products/:id', Products.deleteProduct);

app.get('/sales', Sales.getAll);
app.get('/sales/:id', Sales.getById);
app.post('/sales',
  productIdValidation,
  quantityValidationSales,
  quantityValidationZeroSales, Sales.create);
app.put('/sales/:id',
  productIdValidation,
  quantityValidationSales,
  quantityValidationZeroSales, Sales.update);

app.use(middlewareError);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
