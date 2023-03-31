# Message

全局提示

::: details 案例
<<< @/src/pages/Message/Message.tsx
:::

#### API

Message.error(msg, option);<br/>
Message.warning(msg, option);<br/>
Message.success(msg, option);

| 参数   |   说明   |                     类型                     | 必须 | 默认值 | 版本 |
| ------ | :------: | :------------------------------------------: | ---- | ------ | ---- |
| msg    | 提示信息 |                    String                    | 是   | false  | --   |
| option |   属性   | [查看 options 属性](./README.md#option-属性) | 否   | --     | --   |

#### Option 属性

| 成员      |              说明              |    类型    | 必须 | 默认值 | 版本 |
| --------- | :----------------------------: | :--------: | ---- | ------ | ---- |
| duration  | 自动关闭的延时，单位毫秒（ms） |   Number   | 否   | 2000   | --   |
| animation |            动画效果            |  Boolean   | 否   | true   | --   |
| callBack  |      关闭时触发的回调函数      | () => void | 否   | --     | --   |
