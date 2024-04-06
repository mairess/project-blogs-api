const express = require('express');
const swaggerUI = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');
const cors = require('cors');
const { loginRoutes, userRoutes, categoryRoutes, blogPostRoutes } = require('./routes');
require('express-async-errors');

const raw = fs.readFileSync('swagger.yaml');
const data = yaml.load(raw);

const erroMessage500 = 'Unexpected error!';

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(data));
app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoryRoutes);

app.use('/post', blogPostRoutes);

app.use((error, req, res, _next) => {
  console.error(error);
  res.status(500).json({ error: erroMessage500 });
});

module.exports = app;
