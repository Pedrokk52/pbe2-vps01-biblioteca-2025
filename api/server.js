const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./src/routes');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3001, () => {
  console.log('API executando em http://localhost:3001');
});pair_b41fc7bdc7774ea987fb8a81871accf1