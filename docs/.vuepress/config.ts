const config = {
  base: "/",
  evergreen: true,
  title: "时励UI组件",
  description: "基于vue2.7.14的UI组件",
  themeConfig: {
    lastUpdated: "上次更新:",
    nav: [
      {
        text: "生态系统",
        ariaLabel: "Language Menu",
        items: [
          {
            text: "Vue2",
            link: "https://v2.cn.vuejs.org/v2/guide/",
          },
          {
            text: "Vue Router3",
            link: "https://v3.router.vuejs.org/zh/",
          },
          {
            text: "Pinia",
            link: "https://pinia.web3doc.top/introduction.html",
          },
          {
            text: "Axios",
            link: "https://www.axios-http.cn/docs/intro",
          },
          {
            text: "Sass",
            link: "https://www.sass.hk/docs/",
          },
          {
            text: "Typescript",
            link: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",
          },
        ],
      },
      {
        text: "Guide",
        link: "https://github.com/Feng-Fred/sl-vue2-template",
      },
      {
        text: "NPM",
        link: "https://www.npmjs.com/package/sl-vue2-template",
      },
    ],
    sidebar: [
      {
        title: "组件引入",
        path: "/guide/",
        collapsable: false,
      },
      {
        title: "Button 按钮",
        path: "/guide/button/",
        collapsable: false,
      },
    ],
  },
};

export default config;
