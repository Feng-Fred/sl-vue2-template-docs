import { defineComponent } from "vue";
import { Button, Dialog } from "sl-vue2-template";

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
      <div>
        <Button handlerClick={this.onClose}>open</Button>
        <Dialog show={this.show} handlerClose={this.onClose}>
          Dialog
        </Dialog>
      </div>
    );
  },
});
