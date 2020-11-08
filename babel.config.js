module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}],
  '@babel/preset-typescript', 
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-object-assign",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
  ]
};