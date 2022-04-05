require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');

const Products = require('./controllers/ProductsController');
const Sales = require('./controllers/SalesController');
const middlewareError = require('./middleware/Error');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', Products.getAll);
app.get('/products/:id', Products.getById);
app.post('/products', Products.create);
app.put('/products/:id', Products.update);
app.get('/sales', Sales.getAll);
app.get('/sales/:id', Sales.getById);

app.use(middlewareError);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
