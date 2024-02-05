const fs = require('fs');
const path = require('path');

const routes = {};

fs.readdirSync(__dirname)
  .filter((file) => file.includes('route'))
  .forEach((file) => {
    const route = require(path.join(__dirname, file));
    const routeName = file.replace('.route.js', 'Routes');
    routes[routeName] = route;
  });

module.exports = routes;