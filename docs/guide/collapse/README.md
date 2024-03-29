# Collapse

折叠面板
结合[Collapse.Header](./README.md#collapse-header) 与 Collapse.Panel 使用
也可以不需要 Collapse.Header，直接使用 CollapsePanel，不过这样的话需要结合 active 使用

::: details 案例
<<< @/src/pages/Collapse/Collapse.tsx
:::

#### 属性

| 成员      |          说明           |      类型      | 必须 | 默认值 | 版本 |
| --------- | :---------------------: | :------------: | ---- | ------ | ---- |
| mark      | 标记，与 group 结合使用 | String, Number | 否   | --     | --   |
| active    |        是否展开         |    Boolean     | 否   | --     | --   |
| disabled  |          禁用           |    Boolean     | 否   | false  | --   |
| animation |        动画效果         |    Boolean     | 否   | true   | --   |
| className |     自定义 class 名     |     String     | 否   | --     | --   |

## Collapse.Header

折叠面板头部，从属于 Collapse

#### 属性

| 成员      |           说明            |                                  类型                                  | 必须 | 默认值 | 版本 |
| --------- | :-----------------------: | :--------------------------------------------------------------------: | ---- | ------ | ---- |
| justify   | flex 布局下的水平排列方式 | 'start' \| 'end' \| 'center' <br/>\| 'around' \| 'between' \| 'evenly' | 否   | --     | --   |
| icon      |       是否需要箭头        |                [查看 icon 属性](./README.md#icon-属性)                 | 否   | --     | --   |
| className |      自定义 class 名      |                                 String                                 | 否   | --     | --   |

#### icon 属性

| 成员      |      说明       |                                                         类型                                                         | 必须 | 默认值 | 版本 |
| --------- | :-------------: | :------------------------------------------------------------------------------------------------------------------: | ---- | ------ | ---- | --- | --- | ----- | --- |
| placement |    箭头位置     |                                                  "right" \| "left"                                                   | 是   | --     | --   |
| size      |    图标大小     | '10' \| '12' \| '14' \| '16' \| '18' \| '20' \| '22' \| '24' \| '28' \| '32' \| '36' \| '40' \| '48' \| '56' \| '64' | 否   | '16'   | --   |
| color     |    图标颜色     |                                             [颜色名](../README.md#颜色)                                              | 否   | --     | --   |
| className | 自定义 class 名 |                                                        String                                                        | 否   | --     | --   |     | 否  | false | --  |

## Collapse.Group 折叠面板组群

折叠面板组群

#### 属性

| 成员      |              说明              |      类型      | 必须 | 默认值 | 版本 |
| --------- | :----------------------------: | :------------: | ---- | ------ | ---- |
| active    | 被选中的折叠面板的标记（mark） | String, Number | 是   | --     | --   |
| animation |            动画效果            |    Boolean     | 否   | true   | --   |
| accordion |           手风琴模式           |    Boolean     | 否   | --     | --   |
