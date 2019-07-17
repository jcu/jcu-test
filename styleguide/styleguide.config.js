const path = require('path');
const { theme, styles } = require('./components/styles')
module.exports = {
  title: "JCU React Component Library",
  theme,
  styles,
  sections: [
    {
      name: 'Introduction',
      content: './README.md',
    },
    {
      name: 'Utility Components',
      components: () => ([
        // Add Components here
        '../packages/jcudate/**/*.js',
        '../packages/validators/**/*.js'
      ]),
    },
    {
      name: 'Layout Components',
      components: () => ([
        // Add Components here
        '../packages/layout/**/JcuNavBar.js',
        '../packages/layout/**/JcuEnvironmentBanner.js',
        '../packages/layout/**/Footer.js'        
        
      ]),
    },
    {
      name: 'Tools and Utilities',
      content: './utils_docs.md',
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
