import { defineComponent } from "vue";
import Left from "./components/Left";
import styles from "./styles.module.scss";

/**
 * this.$scopedSlots.default() 会出现type 错误
 * 修复方案， 参考https://github.com/vuejs/vue/pull/8946
 */

const Layout = defineComponent({
  render() {
    return (
      <div class={styles.layout}>
        <div class={styles.content}>
          <Left />
          <div class={styles.container}>
            {(
              this.$scopedSlots.default ??
              (() => {
                return "default value";
              })
            )(this.$props)}
          </div>
        </div>
      </div>
    );
  },
});

export default Layout;
