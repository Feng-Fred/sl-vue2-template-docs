# Button 按钮

::: details 案例
<<< @/src/pages/Button/Button.tsx
:::

## Button.Primary 主按钮

#### 属性

| 成员       |                   说明                   |                                                                                                                                        类型                                                                                                                                        | 必须 | 默认值          | 版本 |
| ---------- | :--------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ---- | --------------- | ---- |
| size       |                 按钮尺寸                 |                                                                                                                            'large' \ 'small' \ 'middle'                                                                                                                            | 否   | 'middle'        | --   |
| color      | 背景颜色/边框颜色(当设置了 plain 时有效) | "primary-color"\| "second-color"\| "success-color"\| "error-color"\| "warning-color"\| "link-color"\| "info-color"\| "white"\| "red"\| "light-red"\| "black"\| "light-black"\| "aux-black"\| "text"\| "aux-text"\| "grey"\| "light-grey"\| "blue"\| "success"\| "waring"\| "error" | 否   | 'primary-color' | --   |
| disabled   |                   禁用                   |                                                                                                                                      Boolean                                                                                                                                       | 否   | false           | --   |
| full       |                宽度 100%                 |                                                                                                                                      Boolean                                                                                                                                       | 否   | false           | --   |
| plain      |                   空心                   |                                                                                                                                      Boolean                                                                                                                                       | 否   | false           | --   |
| loading    |                 加载状态                 |                                                                                                                                      Boolean                                                                                                                                       | 否   | false           | --   |
| preIcon    |                 前置图标                 |                                                                                                                                   查看 icon 组件                                                                                                                                   | 否   | --              | --   |
| suffixIcon |                 后置图标                 |                                                                                                                                   查看 icon 组件                                                                                                                                   | 否   | --              | --   |
| className  |             自定义 class 名              |                                                                                                                                       String                                                                                                                                       | 否   | --              | --   |

#### 事件

| 事件名称     | 说明         | 回调参数   | 必须 | 版本 |
| :----------- | :----------- | :--------- | :--: | :--: |
| handlerClick | 点击时的回调 | () => void |  否  |  --  |

## Button.Text 文本按钮 Button.Link 链接按钮

#### 属性

| 成员      |      说明       |                                                                                                                                        类型                                                                                                                                        | 必须 | 默认值          | 版本 |
| --------- | :-------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ---- | --------------- | ---- |
| size      |    按钮尺寸     |                                                                                                                            'large' \ 'small' \ 'middle'                                                                                                                            | 否   | 'middle'        | --   |
| color     |    文本颜色     | "primary-color"\| "second-color"\| "success-color"\| "error-color"\| "warning-color"\| "link-color"\| "info-color"\| "white"\| "red"\| "light-red"\| "black"\| "light-black"\| "aux-black"\| "text"\| "aux-text"\| "grey"\| "light-grey"\| "blue"\| "success"\| "waring"\| "error" | 否   | 'primary-color' | --   |
| disabled  |      禁用       |                                                                                                                                      Boolean                                                                                                                                       | 否   | false           | --   |
| className | 自定义 class 名 |                                                                                                                                       String                                                                                                                                       | 否   | --              | --   |

#### 事件

| 事件名称     | 说明         | 回调参数   | 必须 | 版本 |
| :----------- | :----------- | :--------- | :--: | :--: |
| handlerClick | 点击时的回调 | () => void |  否  |  --  |

## Button.Group 按钮组

#### 属性

| 成员    |           说明            |                               类型                                | 必须 | 默认值 | 版本 |
| ------- | :-----------------------: | :---------------------------------------------------------------: | ---- | ------ | ---- |
| justify | flex 布局下的水平排列方式 | 'start' \| 'end' \| 'center' \| 'around' \| 'between' \| 'evenly' | 否   | --     | --   |
| wrap    |           换行            |                              boolean                              | 否   | false  | --   |