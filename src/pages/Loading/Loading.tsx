import { defineComponent } from "vue";
import { Button, Loading } from "sl-vue2-template";

export default defineComponent({
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onShowModel() {
      this.show = !this.show;
    },
  },
  render() {
    return (
      <div>
        <Button handlerClick={this.onShowModel}>open</Button>
        <Loading loading={this.show} />
      </div>
    );
  },
});
