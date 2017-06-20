switch (process.env.NODE_ENV) {
  case 'prod':
    module.exports = require('./scripts/webpack/webpack.prod');
    break;
  case 'dev':
  default:
    module.exports = require('./scripts/webpack/webpack.dev');
}
