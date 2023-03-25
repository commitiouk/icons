module.exports = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],

  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.resolve.modules.push('node_modules', 'src', '.storybook');

    return config;
  },
};
