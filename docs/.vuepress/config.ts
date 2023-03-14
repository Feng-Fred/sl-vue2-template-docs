import navList from "./config/nav";
import sidebarList from "./config/sidebar";

const config = {
  base: "/",
  evergreen: true,
  title: "时励UI组件",
  description: "基于vue2.7.14的UI组件",
  themeConfig: {
    lastUpdated: "上次更新",
    smoothScroll: true,
    nav: navList,
    sidebar: sidebarList,
  },
  markdown: {
    lineNumbers: true,
  },
};

export default config;
