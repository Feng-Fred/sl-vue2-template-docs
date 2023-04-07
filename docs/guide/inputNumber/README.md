# Input.Number

计数器，这个组件与 Input 组件 type=“number”是不一样的。

::: details 案例
<<< @/src/pages/InputNumber/InputNumber.tsx
:::

#### 属性

| 成员        |       说明       |  类型   | 必须 | 默认值 | 版本 |
| ----------- | :--------------: | :-----: | ---- | ------ | ---- |
| value       |    输入框内容    | String  | 否   | --     | --   |
| placeholder |      占位符      | String  | 否   | --     | --   |
| disabled    |       禁用       | Boolean | 否   | false  | --   |
| readonly    |       只读       | Boolean | 否   | false  | --   |
| decimal     |   是否支持小数   | Boolean | 否   | false  | --   |
| step        | 每次加或减的大小 | Number  | 否   | 1      | --   |
| max         |      最大数      | Number  | 否   | --     | --   |
| min         |      最小数      | Number  | 否   | --     | --   |
| mask        | 格式化输入框内容 | String  | 否   | --     | --   |
| className   | 自定义 class 名  | String  | 否   | --     | --   |

#### 事件

| 事件名称      | 说明       | 回调参数              | 必须 | 版本 |
| :------------ | :--------- | :-------------------- | :--: | :--: |
| handlerChange | 点击的回调 | (arg: number) => void |  否  |  --  |
