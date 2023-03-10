import clsx from "clsx";
import { Typography } from "sl-vue2-template";
import { defineComponent } from "vue";
import router from "../../../../router";
import styles from "./styles.module.scss";

const { H5 } = Typography;

const Left = defineComponent({
  data() {
    return {
      show: true,
      path: "",
    };
  },
  created() {
    this.path = router.currentRoute.fullPath;
  },

  watch: {
    $route(to) {
      this.path = to.path;
    },
  },
  render() {
    const routes = router.getRoutes();

    return (
      <div
        class={clsx({
          [styles.left]: true,
        })}
      >
        <div
          class={clsx({
            [styles.content]: true,
          })}
        >
          <div class={styles.top}>
            <H5>时励组件库</H5>
          </div>
          {routes.map((item) => {
            if (item.redirect) {
              return null;
            }
            return (
              <div
                class={clsx({
                  [styles.title]: true,
                  [styles.active]: this.path === item.path,
                })}
                onClick={() => {
                  if (this.path === item.path) {
                    return;
                  }
                  router.push(item.path);
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
});

export default Left;
