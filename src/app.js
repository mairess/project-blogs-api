const express = require('express');
const { loginRoute, userRoute } = require('./routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/', loginRoute);
app.use('/', userRoute);

module.exports = app;
