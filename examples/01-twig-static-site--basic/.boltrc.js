const path = require('path');
const defaultConfig = require('../00-shared-config/.boltrc.js');

const config = Object.assign(defaultConfig, {
  components: {
    global: [
      '@bolt/global',
      '@bolt/components-button',
      '@bolt/components-icon',
    ],
  },
});

module.exports = config;
