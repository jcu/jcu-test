module.exports = {
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
};