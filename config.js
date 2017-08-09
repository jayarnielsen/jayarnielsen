const path = require('path');
const { argv } = require('yargs');

const isProduction = !!((argv.env && argv.env.production) || argv.p);

module.exports = {
  paths: {
    src: path.resolve( __dirname, './src/_assets' ),
    dist: path.resolve( __dirname, './src/assets' ),
  },
  entry: {
    app: ['./js/app.js', './css/app.scss'],
  },
  copy: [
    {
      from: 'img/**/*',
      to: '[path][name].[ext]',
    },
    {
      from: 'pdf/**/*',
      to: '[path][name].[ext]',
    }
  ],
  enabled: {
    sourceMaps: !isProduction,
    optimize: isProduction,
    watcher: !!argv.watch,
  },
  env: Object.assign({ production: isProduction, development: !isProduction }, argv.env),
}

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = isProduction ? 'production' : 'development';
}
