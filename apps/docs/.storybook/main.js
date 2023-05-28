const path = require("path");
module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    // customize the Vite config here

    return {
      ...config,
      define: {
        ...config.define,
        "process.env.NODE_DEBUG": false,
      },
      resolve: {
        alias: [
          {
            find: "@acme/core",
            replacement: path.resolve(
              __dirname,
              "../../../packages/acme-core/"
            ),
          },
        ],
      },
    };
  },
  docs: {
    autodocs: true,
  },
};
