import { defineComponent } from "vue";
import { Button } from "sl-vue2-template";

export default defineComponent({
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onClose() {
      this.show = !this.show;
      console.log("--->show", this.show);
    },
  },
  render() {
    return <Button>Button Page</Button>;
  },
});
