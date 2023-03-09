import navList from "./config/nav";
import sidebarList from "./config/sidebar";

const config = {
  base: "/",
  evergreen: true,
  title: "时励UI组件",
  plugins: ["@vitejs/plugin-vue2-jsx"],
  description: "基于vue2.7.14的UI组件",
  themeConfig: {
    lastUpdated: "上次更新:",
    nav: navList,
    sidebar: sidebarList,
  },
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: {
    resolve: {
      extensions: [".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.(jsx|tsx|ts)$/,
          loader: "babel-loader",
        },
      ],
    },
  },
};

export default config;
