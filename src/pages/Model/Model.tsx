import { defineComponent } from "vue";
import { Button, Model } from "../../components";
import clsx from "clsx";

export default defineComponent({
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onClose() {
      this.show = !this.show;
    },
  },
  render() {
    return (
      <div
        class={clsx({
          button: true,
          button2: true,
        })}
      >
        <Button handlerClick={this.onClose}>open</Button>
        <Model show={this.show} handlerClose={this.onClose}>
          Dialog
        </Model>
      </div>
    );
  },
});
