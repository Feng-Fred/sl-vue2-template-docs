import { defineComponent } from "vue";
import { Tag } from "sl-vue2-template";

export default defineComponent({
  render() {
    return (
      <div>
        <Tag>Tag</Tag>
        <Tag color="blue">Tag2</Tag>
      </div>
    );
  },
});
