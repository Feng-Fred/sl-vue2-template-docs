import VueRouter from "vue-router";
import Button from "../pages/Button";
import CheckBox from "../pages/CheckBox";
import Collapse from "../pages/Collapse";
import Color from "../pages/Color";
import Dialog from "../pages/Dialog";
import Drawer from "../pages/Drawer";
import Grid from "../pages/Grid";
import Icon from "../pages/Icon";
import Loading from "../pages/Loading";
import Menu from "../pages/Menu";
import Message from "../pages/Message";
import Model from "../pages/Model";
import Radio from "../pages/Radio";
import Select from "../pages/Select";
import Switch from "../pages/Switch";
import Tabs from "../pages/Tabs";
import Tag from "../pages/Tag";
import Typography from "../pages/Typography";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      redirect: "/Button",
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
    {
      path: "/drawer",
      name: "Drawer 抽屉",
      component: Drawer,
    },
    {
      path: "/checkBox",
      name: "CheckBox 复选框",
      component: CheckBox,
    },
    {
      path: "/radio",
      name: "Radio 单选框",
      component: Radio,
    },
    {
      path: "/collapse",
      name: "Collapse 折叠面板",
      component: Collapse,
    },
    {
      path: "/tag",
      name: "Tag 标签",
      component: Tag,
    },
    {
      path: "/tabs",
      name: "Tabs 标签页",
      component: Tabs,
    },
    {
      path: "/menu",
      name: "Menu 导航菜单",
      component: Menu,
    },
  ],
});

export default router;
