# Radio

单选框

::: details 案例
<<< @/src/pages/Radio/Radio.tsx
:::

#### 属性

| 成员      |           说明            |            类型             | 必须 | 默认值          | 版本 |
| --------- | :-----------------------: | :-------------------------: | ---- | --------------- | ---- |
| checked   |         是否选中          |           boolean           | 否   | --              | --   |
| value     | 选项值，与 group 一起使用 |       String\|Number        | 否   | --              | --   |
| color     |       背景/边框颜色       | [颜色名](../README.md#颜色) | 否   | 'primary-color' | --   |
| disabled  |           禁用            |           Boolean           | 否   | false           | --   |
| className |      自定义 class 名      |           String            | 否   | --              | --   |

#### 事件

| 事件名称      | 说明       | 回调参数               | 必须 | 版本 |
| :------------ | :--------- | :--------------------- | :--: | :--: |
| handlerChange | 点击的回调 | (arg: boolean) => void |  否  |  --  |

## Radio.Group 单选框组群

单选框组群

#### 属性

| 成员      |      说明       |            类型             | 必须 | 默认值          | 版本 |
| --------- | :-------------: | :-------------------------: | ---- | --------------- | ---- |
| value     |     选项值      |       string\|number        | 是   | --              | --   |
| color     |  背景/边框颜色  | [颜色名](../README.md#颜色) | 否   | 'primary-color' | --   |
| disabled  |      禁用       |           boolean           | 否   | false           | --   |
| className | 自定义 class 名 |           String            | 否   | --              | --   |

#### 事件

| 事件名称      | 说明       | 回调参数     |      必须       | 版本 |
| :------------ | :--------- | :----------- | :-------------: | :--: | --- |
| handlerChange | 点击的回调 | (arg: string | number) => void |  是  | --  |
