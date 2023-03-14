# Select

下拉框

::: details 案例
<<< @/src/pages/Select/Select.tsx
:::

#### 属性

| 成员      |      说明       |                     类型                     | 必须 | 默认值 | 版本 |
| --------- | :-------------: | :------------------------------------------: | ---- | ------ | ---- |
| value     |     已选值      |                String\|Number                | 是   | --     | --   |
| options   |    拉下选项     | [查看 options 属性](./README.md#option-属性) | 是   | --     | --   |
| disabled  |      禁用       |                   Boolean                    | 否   | false  | --   |
| className | 自定义 class 名 |                    String                    | 否   | --     | --   |

#### 事件

| 事件名称      | 说明             | 回调参数                | 必须 | 版本 |
| :------------ | :--------------- | :---------------------- | :--: | :--: |
| handlerChange | value 变化的回调 | (value: 选中值) => void |  是  |  --  |

#### Option 属性

| 成员     |   说明   |      类型      | 必须 | 默认值 | 版本 |
| -------- | :------: | :------------: | ---- | ------ | ---- |
| value    |  选项值  | String\|Number | 是   | --     | --   |
| label    | 选项文本 |     String     | 是   | --     | --   |
| disabled |   禁用   |    Boolean     | 否   | false  | --   |
