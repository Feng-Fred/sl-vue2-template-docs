# Model

弹出层

::: details 案例
<<< @/src/pages/Model/Model.tsx
:::

#### 属性

| 成员      |      说明       |  类型   | 必须 | 默认值 | 版本 |
| --------- | :-------------: | :-----: | ---- | ------ | ---- |
| show      |      可见       | Boolean | 是   | false  | --   |
| width     |  弹出层的宽度   | Number  | 否   | --     | --   |
| animation |    动画效果     | Boolean | 否   | true   | --   |
| className | 自定义 class 名 | String  | 否   | --     | --   |

#### 事件

| 事件名称     | 说明       | 回调参数   | 必须 | 版本 |
| :----------- | :--------- | :--------- | :--: | :--: |
| handlerClose | 关闭的回调 | () => void |  是  |  --  |
