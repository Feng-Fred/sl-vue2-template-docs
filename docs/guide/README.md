# 引入

```sh
npm i sl-vue-template
```

---

::: warning 警告

#### :zap: 你可能会额外遇到 sass 的错误，所以你需要引入 sass

```sh
npm i sass
```

:::

::: danger 危险

.vue 使用可能会遇到<Button.Primary>不存在的问题，这是因为 vue 文件不能这样使用组件
请按下面注入组件

```js
import { Button } form 'sl-vue2-template'

export default {
  components: {
     ButtonPrimary: Button.Primary
  }
}

```

:::

#### 颜色

::: tip 颜色名与对应的值

```css
.color {
  primary-color: #c00000;
  second-color: #cd2500;
  success-color: #52c41a;
  error-color: #ff4d4f;
  warning-color: #faad14;
  link-color: #c00000;
  info-color: #1890ff;
  white: #ffffff;
  red: #ff1111;
  light-red: #f4dfdf;
  black: #000000;
  light-black: #444444;
  aux-black: #666666;
  text: #000000d9;
  aux-text: #898989;
  grey: #b2b2b2;
  light-grey: #cccccc;
  blue: #3592f4;
  success: #27d181;
  waring: #ee7000;
  error: #cc0000;
}
```

:::

#### Icon 图标

::: tip Icon 名

```js
"Prompt" |
  "Refresh" |
  "Picture" |
  "Search" |
  "Share" |
  "Scanning" |
  "Security" |
  "Sign Out" |
  "Select" |
  "Stop" |
  "Select Circle" |
  "Setting" |
  "Survey" |
  "Task" |
  "Clock" |
  "Phone" |
  "Unlock" |
  "User" |
  "Upload" |
  "Work" |
  "Warning" |
  "Zoom In" |
  "Zoom Out" |
  "Add Bold" |
  "Arrow Left Bold" |
  "Arrow Up Bold" |
  "Close Bold" |
  "Arrow Down Bold" |
  "Minus Bold" |
  "Arrow Right Bold" |
  "Select Bold" |
  "Arrow Up Filling" |
  "Arrow Down Filling" |
  "Arrow Left Filling" |
  "Arrow Right Filling" |
  "Caps Lock Filling" |
  "Comment Filling" |
  "Select Filling" |
  "Clock Filling" |
  "Close Filling" |
  "Minus Filling" |
  "Favorite Filling" |
  "Help Filling" |
  "History Filling" |
  "Email Filling" |
  "Edit Filling" |
  "Notification Filling" |
  "User Filling" |
  "Setting Filling" |
  "Work Filling" |
  "Select Filling Circle" |
  "Warning Filling" |
  "Folder Filling" |
  "Map Filling" |
  "Prompt Filling" |
  "Sort" |
  "Add" |
  "Add Circle" |
  "Arrow Up Circle" |
  "Arrow Right Circle" |
  "Arrow Down" |
  "Delete" |
  "Arrow Right" |
  "Browse" |
  "Bottom" |
  "Back" |
  "Bad" |
  "Arrow Double Left" |
  "Arrow Left Circle" |
  "Arrow Double Right" |
  "Caps Lock" |
  "Camera" |
  "Chart Bar" |
  "Attachment" |
  "Code" |
  "Close" |
  "Select Square" |
  "Calendar" |
  "Comment" |
  "Complete" |
  "Customer Service" |
  "Direction Down" |
  "Direction Down Circle" |
  "Direction Right" |
  "Direction Up" |
  "Direction Left" |
  "Download" |
  "Export" |
  "Edit" |
  "Browse Close" |
  "Email" |
  "Close Circle" |
  "Favorite" |
  "File Delete" |
  "File Add" |
  "Fabulous" |
  "File" |
  "Folder" |
  "Good" |
  "Home" |
  "History" |
  "Folder Open" |
  "Forward" |
  "Import" |
  "Link" |
  "Lock" |
  "Map" |
  "Menu" |
  "Loading" |
  "Help" |
  "Minus Circle" |
  "Modular" |
  "Notification" |
  "More" |
  "Play" |
  "Print" |
  "Minus" |
  "PDF";
```

:::
