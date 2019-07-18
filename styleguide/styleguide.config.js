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
      name: 'JCU Utility Components',
      components: () => ([
        // Add Components here
        '../packages/jcudate/**/src/JcuDateTime.js',
        '../packages/jcudate/**/src/JcuDate.js',
        '../packages/jcudate/**/src/JcuTime.js'
      ]),
    },
    {
      name: 'JCU Layout Components',
      components: () => ([
        // Add Components here
        '../packages/layout/**/src/JcuNavBar.js',
        '../packages/layout/**/src/JcuEnvironmentBanner.js',
        '../packages/layout/**/src/Footer.js'        
        
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
