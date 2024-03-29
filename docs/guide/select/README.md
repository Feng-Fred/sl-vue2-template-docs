# Select

下拉框

::: details 案例
<<< @/src/pages/Select/Select.tsx
:::

## Select/Select.Search

普通下拉框/带搜索功能的下拉框

#### 属性

| 成员       |      说明       |                     类型                     | 必须 | 默认值 | 版本 |
| ---------- | :-------------: | :------------------------------------------: | ---- | ------ | ---- |
| value      |     已选值      |                String\|Number                | 是   | --     | --   |
| options    |    拉下选项     | [查看 options 属性](./README.md#option-属性) | 是   | --     | --   |
| disabled   |      禁用       |                   Boolean                    | 否   | false  | --   |
| suffixIcon |    后置图标     |      [icon 名](../README.md#icon-图标)       | 否   | --     | --   |
| hiddenIcon |    隐藏 icon    |                   Boolean                    | 否   | false  | --   |
| animation  |    动画效果     |                   Boolean                    | 否   | true   | --   |
| className  | 自定义 class 名 |                    String                    | 否   | --     | --   |

#### 事件

| 事件名称      | 说明             | 回调参数                         | 必须 | 版本 |
| :------------ | :--------------- | :------------------------------- | :--: | :--: |
| handlerChange | value 变化的回调 | (value: String\|Number ) => void |  否  |  --  |

## Select.Multiple

多选模式的下拉框

#### 属性

| 成员      |      说明       |                     类型                     | 必须 | 默认值 | 版本 |
| --------- | :-------------: | :------------------------------------------: | ---- | ------ | ---- |
| value     |     已选值      |             String[\]\|Number[]              | 是   | --     | --   |
| options   |    拉下选项     | [查看 options 属性](./README.md#option-属性) | 是   | --     | --   |
| disabled  |      禁用       |                   Boolean                    | 否   | false  | --   |
| animation |    动画效果     |                   Boolean                    | 否   | true   | --   |
| className | 自定义 class 名 |                    String                    | 否   | --     | --   |

#### 事件

| 事件名称      | 说明             | 回调参数                              | 必须 | 版本 |
| :------------ | :--------------- | :------------------------------------ | :--: | :--: |
| handlerChange | value 变化的回调 | (value: String[\]\|Number[] ) => void |  否  |  --  |

#### Option 属性

| 成员     |                     说明                      |      类型      | 必须 | 默认值 | 版本 |
| -------- | :-------------------------------------------: | :------------: | ---- | ------ | ---- |
| value    |                    选项值                     | String\|Number | 是   | --     | --   |
| label    |                   选项文本                    |     String     | 是   | --     | --   |
| disabled |                     禁用                      |    Boolean     | 否   | false  | --   |
| default  | 默认选中，(当使用 Select.Multiple 的时候有效) |    Boolean     | 否   | false  | --   |
