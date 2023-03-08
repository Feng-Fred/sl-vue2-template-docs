export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroText\":\"欢迎使用时励UI组件\",\"tagline\":\"基于vue2.7+vite2组件，兼容与ie11\",\"actionText\":\"快速上手 →\",\"actionLink\":\"/guide/\",\"features\":[{\"title\":\"Sass\",\"details\":\"Scss预处理\"},{\"title\":\"vite2\",\"details\":\"vite作为打包工具\"},{\"title\":\"typescript -> tsx\",\"details\":\"代码更加安全与高效\"}],\"footer\":\"MIT Licensed | Copyright © 2023-present Evan Fred\"},\"headers\":[],\"git\":{\"updatedTime\":1678178770000,\"contributors\":[{\"name\":\"Feng-Fred\",\"email\":\"fred.shanghai.feng+2022@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
