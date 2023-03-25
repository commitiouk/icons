module.exports = {
  removeDimensions: false,
  plugins: [
    'prefixIds',
    {
      name: 'sortAttrs',
      params: {
        xmlnsOrder: 'alphabetical',
      },
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: '(width|height|fill|stroke|class)',
      },
    },
  ],
};
