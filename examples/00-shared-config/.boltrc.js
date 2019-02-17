const path = require('path');

const config = {
  env: 'static',
  srcDir: './src/pages',
  wwwDir: './www',
  dataDir: './www/build/data',
  buildDir: './www/build',
  enableCache: true,
  webpackDevServer: true,
  schemaErrorReporting: 'cli',
  extraTwigNamespaces: {
    bolt: {
      recursive: true,
      paths: ['src/', './node_modules/@bolt'],
    },
    templates: {
      recursive: true,
      paths: [
        './src/templates',
      ],
    },
  },
  alterTwigEnv: [
    {
      file: path.resolve(`./SetupTwigRenderer.php`),
      functions: ['addBoltExtensions'],
    },
  ],
};

module.exports = config;
