import VueRouter from "vue-router";
import Button from "../pages/Button";
import Color from "../pages/Color";
import Dialog from "../pages/Dialog";
import Grid from "../pages/Grid";
import Icon from "../pages/Icon";
import Loading from "../pages/Loading";
import Message from "../pages/Message";
import Model from "../pages/Model";
import Select from "../pages/Select";
import Switch from "../pages/Switch";
import Typography from "../pages/Typography";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      redirect: "/typography",
    },
    {
      path: "/color",
      name: "基础颜色",
      component: Color,
    },
    {
      path: "/grid",
      name: "Grid 栅格",
      component: Grid,
    },
    {
      path: "/button",
      name: "Button 按钮",
      component: Button,
    },
    {
      path: "/typography",
      name: "Typography 排版",
      component: Typography,
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
    {
      path: "/select",
      name: "Select 下拉框",
      component: Select,
    },
    {
      path: "/loading",
      name: "Loading 加载中",
      component: Loading,
    },
    {
      path: "/message",
      name: "Message 全局提示",
      component: Message,
    },
  ],
});

export default router;
