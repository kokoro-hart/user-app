const path = require("path");
const react = require("@vitejs/plugin-react");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  typescript: {
    check: true,
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src/"),
        },
      },
      define: {
        ...config.define,
        global: "window",
      },
      plugins: [
        ...config.plugins.filter(
          (plugin) => !(Array.isArray(plugin) && plugin[0]?.name.includes("vite:react")),
        ),
        ...react({
          exclude: [/\.stories\.tsx?$/, /node_modules/],
          jsxImportSource: "@emotion/react",
          babel: {
            plugins: ["@emotion/babel-plugin"],
          },
        }),
      ],
    };
  },
};
