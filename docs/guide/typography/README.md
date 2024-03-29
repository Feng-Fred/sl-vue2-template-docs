# Typography 排版

::: details 案例
<<< @/src/pages/Typography/Typography.tsx
:::

## 标题 （H1，H2，H3，H4，H5）

主标题

#### 属性

| 成员      |      说明       |                                             类型                                              | 必须 | 默认值  | 版本 |
| --------- | :-------------: | :-------------------------------------------------------------------------------------------: | ---- | ------- | ---- |
| fontStyle |    字体风格     |                                     "italic" \| "normal"                                      | 否   | normal  | --   |
| color     |    字体颜色     |                                [支持的颜色](../README.md#颜色)                                | 否   | "black" | --   |
| size      |    字体大小     | "10"\|"12"\|"14"\|"16"\|"18"\|"20"\|"22"<br/>\|"24"\|"28"\|"32"\|"36"\|"40"\|"48"\|"56"\|"64" | 否   | --      | --   |
| weight    |    字体粗细     |          "bold"\|"100"\|"200"\|"300"\|"400"<br/>\|"500"\|"600"\|"700"\|"800"\|"900"           | 否   | --      | --   |
| className | 自定义 class 名 |                                            String                                             | 否   | --      | --   |

#### 事件

| 事件名称     | 说明       | 回调参数   | 必须 | 版本 |
| :----------- | :--------- | :--------- | :--: | :--: |
| handlerClick | 点击的回调 | () => void |  是  |  --  |

## Text/Text.Link 文本

span 文本或者文本链接

#### 属性

| 成员      |      说明       |                                             类型                                              | 必须 | 默认值  | 版本 |
| --------- | :-------------: | :-------------------------------------------------------------------------------------------: | ---- | ------- | ---- |
| fontStyle |    字体风格     |                                     "italic" \| "normal"                                      | 否   | normal  | --   |
| color     |    字体颜色     |                                [支持的颜色](../README.md#颜色)                                | 否   | "black" | --   |
| size      |    字体大小     | "10"\|"12"\|"14"\|"16"\|"18"\|"20"\|"22"<br/>\|"24"\|"28"\|"32"\|"36"\|"40"\|"48"\|"56"\|"64" | 否   | --      | --   |
| weight    |    字体粗细     |          "bold"\|"100"\|"200"\|"300"\|"400"<br/>\|"500"\|"600"\|"700"\|"800"\|"900"           | 否   | --      | --   |
| disabled  |      禁用       |                                            Boolean                                            | 否   | false   | --   |
| className | 自定义 class 名 |                                            String                                             | 否   | --      | --   |

#### 事件

| 事件名称     | 说明       | 回调参数   | 必须 | 版本 |
| :----------- | :--------- | :--------- | :--: | :--: |
| handlerClick | 点击的回调 | () => void |  是  |  --  |

## P 段落

Paragraph 段落

#### 属性

| 成员      |                   说明                   |                                             类型                                              | 必须 | 默认值  | 版本 |
| --------- | :--------------------------------------: | :-------------------------------------------------------------------------------------------: | ---- | ------- | ---- |
| fontStyle |                 字体风格                 |                                     "italic" \| "normal"                                      | 否   | normal  | --   |
| color     |                 字体颜色                 |                                [支持的颜色](../README.md#颜色)                                | 否   | "black" | --   |
| size      |                 字体大小                 | "10"\|"12"\|"14"\|"16"\|"18"\|"20"\|"22"<br/>\|"24"\|"28"\|"32"\|"36"\|"40"\|"48"\|"56"\|"64" | 否   | --      | --   |
| weight    |                 字体粗细                 |          "bold"\|"100"\|"200"\|"300"\|"400"<br/>\|"500"\|"600"\|"700"\|"800"\|"900"           | 否   | --      | --   |
| ellipsis  | 自动溢出省略，设置对应的 string 省略行数 |                Boolean\|"1"\|"2"\|"3"\|"4"<br/>\|"5"\|"6"\|"7"\|"8"\|"9"\|"10"                | 否   | false   | --   |
| className |             自定义 class 名              |                                            String                                             | 否   | --      | --   |

#### 事件

| 事件名称     | 说明       | 回调参数   | 必须 | 版本 |
| :----------- | :--------- | :--------- | :--: | :--: |
| handlerClick | 点击的回调 | () => void |  是  |  --  |
