# CheckBox

复选框

::: details 案例
<<< @/src/pages/CheckBox/CheckBox.tsx
:::

#### 属性

| 成员          |           说明           |            类型             | 必须 | 默认值          | 版本 |
| ------------- | :----------------------: | :-------------------------: | ---- | --------------- | ---- |
| checked       |         是否选中         |           Boolean           | 是   | --              | --   |
| indeterminate | 负责样式控制（用于全选） |           Boolean           | 否   | --              | --   |
| color         |      背景/边框颜色       | [颜色名](../README.md#颜色) | 否   | 'primary-color' | --   |
| disabled      |           禁用           |           Boolean           | 否   | false           | --   |
| animation     |         动画效果         |           Boolean           | 否   | true            | --   |
| className     |     自定义 class 名      |           String            | 否   | --              | --   |

#### 事件

| 事件名称      | 说明       | 回调参数               | 必须 | 版本 |
| :------------ | :--------- | :--------------------- | :--: | :--: |
| handlerChange | 点击的回调 | (arg: Boolean) => void |  否  |  --  |

## CheckBox.Group 复选框组群

复选框组群

#### 属性

| 成员      |      说明       |                     类型                     | 必须 | 默认值          | 版本 |
| --------- | :-------------: | :------------------------------------------: | ---- | --------------- | ---- |
| label     |   总按钮文本    |                    String                    | 否   | --              | --   |
| values    |     选择值      |             String[] \| Number[]             | 是   | --              | --   |
| options   |    拉下选项     | [查看 options 属性](./README.md#option-属性) | 是   | --              | --   |
| color     |  背景/边框颜色  |       [支持的颜色](../README.md#颜色)        | 否   | 'primary-color' | --   |
| disabled  |      禁用       |                   Boolean                    | 否   | false           | --   |
| animation |    动画效果     |                   Boolean                    | 否   | true            | --   |
| className | 自定义 class 名 |                    String                    | 否   | --              | --   |

#### 事件

| 事件名称      | 说明       | 回调参数       |       必须        | 版本 |
| :------------ | :--------- | :------------- | :---------------: | :--: | --- |
| handlerChange | 点击的回调 | (arg: String[] | Number[]) => void |  是  | --  |

#### Option 属性

| 成员     |   说明   |      类型      | 必须 | 默认值 | 版本 |
| -------- | :------: | :------------: | ---- | ------ | ---- |
| value    |  选项值  | String\|Number | 是   | --     | --   |
| label    | 选项文本 |     String     | 是   | --     | --   |
| disabled |   禁用   |    Boolean     | 否   | false  | --   |
| default  | 默认选中 |    Boolean     | 否   | false  | --   |
