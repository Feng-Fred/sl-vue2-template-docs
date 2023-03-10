import VueRouter from "vue-router";
import Button from "../pages/Button";
import Dialog from "../pages/Dialog";
import Icon from "../pages/Icon";
import Model from "../pages/Model";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/button",
      name: "Button",
      component: Button,
    },
    {
      path: "/dialog",
      name: "Dialog",
      component: Dialog,
    },
    {
      path: "/model",
      name: "Model",
      component: Model,
    },
    {
      path: "/",
      name: "Icon",
      component: Icon,
    },
  ],
});

export default router;
