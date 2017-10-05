/* register babel core */
require('babel-core/register')({
  ignore: /node_modules/,
  presets: [['es2015', { modules: false }], 'react'],
  plugins: ['transform-es2015-modules-umd']
})
