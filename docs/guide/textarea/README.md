# Textarea

文本区

::: details 案例
<<< @/src/pages/Textarea/Textarea.tsx
:::

#### 属性

| 成员        |      说明       |  类型   | 必须 | 默认值 | 版本 |
| ----------- | :-------------: | :-----: | ---- | ------ | ---- |
| value       |   输入框内容    | Number  | 否   | --     | --   |
| placeholder |     占位符      | String  | 否   | --     | --   |
| disabled    |      禁用       | Boolean | 否   | false  | --   |
| readonly    |      只读       | Boolean | 否   | false  | --   |
| resize      |    调整大小     | Boolean | 否   | false  | --   |
| className   | 自定义 class 名 | String  | 否   | --     | --   |

#### 事件

| 事件名称      | 说明       | 回调参数              | 必须 | 版本 |
| :------------ | :--------- | :-------------------- | :--: | :--: |
| handlerChange | 点击的回调 | (arg: string) => void |  否  |  --  |
