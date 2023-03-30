# Menu

导航菜单栏, 字体颜色默认父元素，结合[Menu.Item](./README.md#menu-item) 使用，
包含 [Menu.Group](./README.md#menu-group) 最多支持 10 级。

::: details 案例
<<< @/src/pages/Menu/Menu.tsx
:::

#### 属性

| 成员         |                           说明                           |              类型               | 必须 | 默认值          | 版本 |
| ------------ | :------------------------------------------------------: | :-----------------------------: | ---- | --------------- | ---- |
| active       |              被选中的折叠面板的标记（mark）              |         String, Number          | 否   | --              | --   |
| color        | 鼠标移动上去的文本颜色，被选中的字体颜色与背景、边框颜色 | [支持的颜色](../README.md#颜色) | 否   | 'primary-color' | --   |
| hiddenBorder |                         隐藏边框                         |             Boolean             | 否   | --              |
| className    |                     自定义 class 名                      |             String              | 否   | --              | --   |

## Menu.Group

Menu 下的菜单栏群组
结合 Menu.Group.Header 与 Menu.Group.Content，[Menu.Item](./README.md#menu-item)使用

#### 属性

| 成员      |      说明       |      类型      | 必须 | 默认值 | 版本 |
| --------- | :-------------: | :------------: | ---- | ------ | ---- |
| mark      |      标记       | String, Number | 否   | --     | --   |
| show      |  是否默认展开   |    Boolean     | 否   | false  | --   |
| disabled  |      禁用       |    Boolean     | 否   | false  | --   |
| className | 自定义 class 名 |     String     | 否   | --     | --   |

## Menu.Item

菜单栏子元素

#### 属性

| 成员      |      说明       |      类型      | 必须 | 默认值 | 版本 |
| --------- | :-------------: | :------------: | ---- | ------ | ---- |
| mark      |      标记       | String, Number | 否   | --     | --   |
| disabled  |      禁用       |    Boolean     | 否   | false  | --   |
| className | 自定义 class 名 |     String     | 否   | --     | --   |

#### 事件

| 事件名称     | 说明       | 回调参数   | 必须 | 版本 |
| :----------- | :--------- | :--------- | :--: | :--: |
| handlerClick | 点击的回调 | () => void |  否  |  --  |
