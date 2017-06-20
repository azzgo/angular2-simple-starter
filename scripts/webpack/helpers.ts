import * as path from 'path';
import * as os from 'os';


module.exports.root = function(relativePath) {
  relativePath = relativePath || '';

  return path.join(path.resolve(
    __dirname, '../..'
  ), relativePath)
};

