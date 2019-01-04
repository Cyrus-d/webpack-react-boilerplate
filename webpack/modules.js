const globImporter = require('node-sass-glob-importer');

const exclude = [/node_modules/, /(\/dist)/, /(\/build)/];
const path = require('path');

// eslint-disable-next-line func-names
module.exports = function() {
  return {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: 'babel-loader',
        exclude,
      },
      {
        test: /\.(ts|tsx)$/,
        loaders: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude,
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          url: true,
          modules: false,
          hmr: true,
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              modules: true,
              camelCase: true,
              getLocalIdent: (loaderContext, localIdentName, localName) => {
                const fileName = path.basename(loaderContext.resourcePath);
                if (fileName.indexOf('common.scss') !== -1) {
                  return localName;
                }
                return `${localName}`;
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              // eslint-disable-next-line global-require
              plugins: [require('autoprefixer')],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              importer: globImporter(),
            },
          },
        ],
        exclude,
      },
    ],
  };
};
