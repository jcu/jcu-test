module.exports = {
  sections: [
    {
      name: 'JCU React Component Library - TEST Server',
      content: './README.md',
    },
    {
      name: 'JCU UI Components',
      components: () => ([
        // Add Components here
        '../packages/jcudate/src/index.js',
        //'../packages/text/src/index.js',
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
  template: './template.html',
  webpackConfig: require('./webpack.styleguide.js'),
};
