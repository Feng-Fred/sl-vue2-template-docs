import VueRouter from "vue-router";
import Button from "../pages/Button";
import Color from "../pages/Color";
import Dialog from "../pages/Dialog";
import Icon from "../pages/Icon";
import Model from "../pages/Model";
import Switch from "../pages/Switch";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      redirect: "/color",
    },
    {
      path: "/color",
      name: "基础颜色",
      component: Color,
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
    {
      path: "/switch",
      name: "Switch 开关",
      component: Switch,
    },
  ],
});

export default router;
