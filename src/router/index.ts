import VueRouter from "vue-router";
import Button from "../pages/Button";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Button",
      component: Button,
    },
  ],
});

export default router;
