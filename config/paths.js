const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  index: resolvePath('src/index'),
  rootPath: resolvePath(''),
  src: resolvePath('src'),
  features: resolvePath('src/app/features'),
};
