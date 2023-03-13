import { defineComponent } from "vue";
import { Typography } from "sl-vue2-template";
import { type Color } from "sl-vue2-template/lib/cjs/types/Typography/Typography";
import "./styles.scss";

const { Text } = Typography;

const colorList: Color[] = [
  "primary-color",
  "second-color",
  "success-color",
  "error-color",
  "warning-color",
  "link-color",
  "info-color",
  "white",
  "red",
  "light-red",
  "black",
  "light-black",
  "aux-black",
  "text",
  "aux-text",
  "grey",
  "light-grey",
  "blue",
  "success",
  "waring",
  "error",
];

export default defineComponent({
  render() {
    return (
      <div class="color-page">
        {colorList.map((item) => {
          return (
            <div class="color-item">
              <Text color={item}>{item}</Text>
              <div class={`color_${item}`}></div>
            </div>
          );
        })}
      </div>
    );
  },
});
