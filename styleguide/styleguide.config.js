const path = require('path');
const { theme, styles } = require('./components/styles')
module.exports = {
  title: "JCU React Component Library",
  theme,
  styles,
  sections: [
    {
      name: 'JCU React Component Library',
      content: './README.md',
    },
    {
      name: 'JCU Utility Components',
      components: () => ([
        // Add Components here
        '../packages/jcudate/**/*.js'
      ]),
    },
    {
      name: 'JCU Layout Components',
      components: () => ([
        // Add Components here
        '../packages/layout/**/Footer.js',
        '../packages/layout/**/JcuEnvironmentBanner.js'
      ]),
    },
    {
      name: 'Composite Components',
      components: () => ([
        // '../packages/input-group/src/index.js',
        //'../packages/card/src/index.js',
      ]),
    },
  ],
  template: {
    favicon: 'https://www.jcu.edu.au/__data/assets/file/0006/642327/favicon.ico?v=0.1.0'
  },
  webpackConfig: require('./webpack.styleguide.js'),
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'components/Logo')
  }
};
