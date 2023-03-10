import VueRouter from "vue-router";
import Button from "../pages/Button";
import Dialog from "../pages/Dialog";
import Icon from "../pages/Icon";
import Model from "../pages/Model";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      redirect: "/icon",
    },
    {
      path: "/button",
      name: "Button 按钮",
      component: Button,
    },
    {
      path: "/dialog",
      name: "Dialog 遮罩层",
      component: Dialog,
    },
    {
      path: "/model",
      name: "Model 弹出层",
      component: Model,
    },
    {
      path: "/icon",
      name: "Icon 图标",
      component: Icon,
    },
  ],
});

export default router;
