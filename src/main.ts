import Vue from "vue";
import App from "./App";
import router from "./router";
import VueRouter from "vue-router";

Vue.use(VueRouter);

new Vue({
  router,
  render: (h: (arg0: any) => any) => {
    return h(App);
  },
}).$mount("#app");
