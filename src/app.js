const express = require('express');
const { loginRoutes, userRoutes, categoryRoutes, blogPostRoutes } = require('./routes');
require('express-async-errors');

const erroMessage500 = 'Unexpected error!';

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/post', blogPostRoutes);

app.use((error, req, res, _next) => {
  console.error(error);
  res.status(500).json({ message: erroMessage500 });
});

module.exports = app;
