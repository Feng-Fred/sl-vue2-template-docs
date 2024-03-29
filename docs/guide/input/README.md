# Input

输入框

::: details 案例
<<< @/src/pages/Input/Input.tsx
:::

#### 属性

| 成员        |                                        说明                                        |                                                   类型                                                    | 必须 | 默认值 | 版本 |
| ----------- | :--------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | ---- | ------ | ---- |
| value       |                                     输入框内容                                     |                                              String\|Number                                               | 否   | --     | --   |
| type        | 类型，不同于原有 type，只用于校验，[查看 type 属性说明](./README.md#type-属性说明) | "text"\|"password"\|"number"\|<br/>"email"\|"card"\|"payment"\|<br/>"phone-number"\|"tel-number"\|"price" | 否   | "text" | --   |
| placeholder |                                       占位符                                       |                                                  String                                                   | 否   | --     | --   |
| disabled    |                                        禁用                                        |                                                  Boolean                                                  | 否   | false  | --   |
| readonly    |                                        只读                                        |                                                  Boolean                                                  | 否   | false  | --   |
| prefix      |                                        前缀                                        |                                                  String                                                   | 否   | --     | --   |
| suffix      |                                        后缀                                        |                                                  String                                                   | 否   | --     | --   |
| icon        |                                        图标                                        |                                  [查看 icon 属性](./README.md#icon-属性)                                  | 否   | --     | --   |
| maxLength   |                                      最大长度                                      |                                                  Number                                                   | 否   | --     | --   |
| mask        |                                  格式化输入框内容                                  |                                                  String                                                   | 否   | --     | --   |
| decimal     |                     是否支持小数,<br/>仅当 type 为 number 有效                     |                                                  Boolean                                                  | 否   | false  | --   |
| valid       |                           是否启用校验，与 type 联动使用                           |                                                  Boolean                                                  | 否   | true   | --   |
| animation   |                                      动画效果                                      |                                                  Boolean                                                  | 否   | true   | --   |
| className   |                                  自定义 class 名                                   |                                                  String                                                   | 否   | --     | --   |

#### 事件

| 事件名称      | 说明       | 回调参数     |      必须       | 版本 |
| :------------ | :--------- | :----------- | :-------------: | :--: | --- |
| handlerChange | 点击的回调 | (arg: string | number) => void |  是  | --  |

#### icon 属性

| 成员      |      说明       |                                                         类型                                                         | 必须 | 默认值  | 版本 |
| --------- | :-------------: | :------------------------------------------------------------------------------------------------------------------: | ---- | ------- | ---- | --- | --- | ----- | --- |
| name      |     图标名      |                                          [icon 名](../README.md#icon-图标)                                           | 是   | --      | --   |
| placement |    箭头位置     |                                                  "right" \| "left"                                                   | 否   | "right" | --   |
| size      |    图标大小     | '10' \| '12' \| '14' \| '16' \| '18' \| '20' \| '22' \| '24' \| '28' \| '32' \| '36' \| '40' \| '48' \| '56' \| '64' | 否   | '14'    | --   |
| color     |    图标颜色     |                                             [颜色名](../README.md#颜色)                                              | 否   | --      | --   |
| className | 自定义 class 名 |                                                        String                                                        | 否   | --      | --   |     | 否  | false | --  |

#### type 属性说明

只有当 type 设定特殊对应属性，并且 valid 为 true 才会触发校验规则，这个校验是实时的，<br/>
所以当 input 应用于 form 时，会强制将 valid 为 false,<br/>
因为 form 表单的校验会在表单 submit 的时候统一校验

| 名称         | 说明                                                                                                            | 规则                 | 版本 |
| ------------ | --------------------------------------------------------------------------------------------------------------- | -------------------- | ---- |
| text         | 默认属性                                                                                                        | --                   | --   |
| password     | 密码                                                                                                            | 非空，长度大于等于 6 | --   |
| number       | 只能输入数字，<br/>当 decimal 为 true 时，可输入小数                                                            | --                   | --   |
| email        | 邮箱                                                                                                            | 非空，邮箱格式       | --   |
| card         | 身份证号                                                                                                        | 非空，身份证号格式   | --   |
| payment      | 银行卡号，<br/>当 mask 没有时，默认 mask="0000 0000 0000 0000 0000"                                             | 非空，银行卡号格式   | --   |
| phone-number | 手机号<br/>当 maxLength 没有时，默认 maxLength=11                                                               | 非空，手机号号格式   | --   |
| tel-number   | 座机号码，需要携带区号<br/>当 mask 没有时，默认 mask="0000-00000000"<br/>当 maxLength 没有时，默认 maxLength=12 | 非空，座机号码格式   | --   |
| price        | 价格，<br/>数字或 2 位小数                                                                                      | --                   | --   |
