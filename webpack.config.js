const webpackMerge = require('webpack-merge');
const common = require('./webpack/webpack.common');

const envs = {
  development: 'dev',
  production: 'prod',
};
/* eslint-disable global-require,import/no-dynamic-require */
const env = envs.development;
const envConfig = require(`./webpack/webpack.${env}.js`);
module.exports = webpackMerge(common, envConfig);
