require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');

const Products = require('./controllers/Products');
const Sales = require('./controllers/Sales');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', Products.getAll);
app.get('/products/:id', Products.getById);
app.get('/sales', Sales.getAll);
app.get('/sales/:id', Sales.getById);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
