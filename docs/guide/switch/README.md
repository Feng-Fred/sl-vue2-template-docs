# Switch 开关

::: details 案例
<<< @/src/pages/Switch/Switch.tsx
:::

#### 属性

| 成员      |                   说明                   |        类型        | 必须 | 默认值          | 版本 |
| --------- | :--------------------------------------: | :----------------: | ---- | --------------- | ---- |
| checked   |                   开关                   |      Boolean       | 是   | false           | --   |
| size      |                   尺寸                   | 'large' \| 'small' | 否   | --              | --   |
| color     | 背景颜色/边框颜色(当设置了 plain 时有效) |     支持的颜色     | 否   | 'primary-color' | --   |
| disabled  |                   禁用                   |      Boolean       | 否   | false           | --   |
| className |             自定义 class 名              |       String       | 否   | --              | --   |

#### 事件

| 事件名称      | 说明             | 回调参数              | 必须 | 版本 |
| :------------ | :--------------- | :-------------------- | :--: | :--: |
| handlerChange | value 变化的回调 | (arg:boolean) => void |  否  |  --  |
