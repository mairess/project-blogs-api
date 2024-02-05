const fs = require('fs');
const path = require('path');

const routes = {};

fs.readdirSync(__dirname)
  .filter((file) => file.includes('controller'))
  .forEach((file) => {
    const route = require(path.join(__dirname, file));
    const routeName = file.replace('.controller.js', 'Controller');
    routes[routeName] = route;
  });

module.exports = routes;