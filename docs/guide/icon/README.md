# Icon

图标

::: details 案例
<<< @/src/pages/Icon/Icon.tsx
:::

#### 属性

| 成员      |      说明       |                                                         类型                                                         | 必须 | 默认值 | 版本 |
| --------- | :-------------: | :------------------------------------------------------------------------------------------------------------------: | ---- | ------ | ---- |
| name      |     图标名      |                                          [icon 名](../README.md#icon-图标)                                           | 是   | --     | --   |
| size      |    图标大小     | '10' \| '12' \| '14' \| '16' \| '18' \| '20' \| '22' \| '24' \| '28' \| '32' \| '36' \| '40' \| '48' \| '56' \| '64' | 否   | '32'   | --   |
| color     |    图标颜色     |                                             [颜色名](../README.md#颜色)                                              | 否   | --     | --   |
| className | 自定义 class 名 |                                                        String                                                        | 否   | --     | --   |

#### 事件

| 事件名称     | 说明       | 回调参数   | 必须 | 版本 |
| :----------- | :--------- | :--------- | :--: | :--: |
| handlerClick | 点击的回调 | () => void |  否  |  --  |