### 组件引入

```sh
npm i sl-vue-template
```

---

### 你可能会额外遇到 sass 的错误，所以你需要引入 sass

```sh
npm i sass
```

.vue 使用可能会遇到<Button.Primary>不存在的问题，这是因为 vue 文件不能这样使用组件
请按下面注入组件

```js
import { Button } form 'sl-vue2-template'

components: {
  ButtonPrimary: Button.Primary
}
export default {
  components: {
     ButtonPrimary: Button.Primary
  }
}
```
