const fs = require('fs');
const path = require('path');

const routes = {};

fs.readdirSync(__dirname)
  .filter((file) => file.includes('service'))
  .forEach((file) => {
    const route = require(path.join(__dirname, file));
    const routeName = file.replace('.service.js', 'Service');
    routes[routeName] = route;
  });

module.exports = routes;