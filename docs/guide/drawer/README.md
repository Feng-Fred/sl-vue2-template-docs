# Drawer

抽屉

::: details 案例
<<< @/src/pages/Drawer/Drawer.tsx
:::

#### 属性

| 成员      |                       说明                       |               类型               | 必须 | 默认值  | 版本 |
| --------- | :----------------------------------------------: | :------------------------------: | ---- | ------- | ---- |
| show      |                       可见                       |             Boolean              | 是   | false   | --   |
| width     |                   弹出层的宽度                   |              Number              | 否   | --      | --   |
| animation |                     动画效果                     |             Boolean              | 否   | true    | --   |
| placement |                     弹出位置                     | "right"\|"left"\|"top"\|"bottom" | 否   | "right" | --   |
| full      | 当 placement 为"right"或者"left"时<br/>内容 100% |             Boolean              | 否   | false   | --   |
| className |                 自定义 class 名                  |              String              | 否   | --      | --   |

#### 事件

| 事件名称     | 说明       | 回调参数   | 必须 | 版本 |
| :----------- | :--------- | :--------- | :--: | :--: |
| handlerClose | 关闭的回调 | () => void |  是  |  --  |
