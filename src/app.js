const express = require('express');
const { loginRoutes, userRoutes, categoryRoutes } = require('./routes');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/', loginRoutes);
app.use('/', userRoutes);
app.use('/', categoryRoutes);

module.exports = app;
