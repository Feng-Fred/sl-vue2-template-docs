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
    },
  },
  render() {
    return (
      <div>
        <Button handlerClick={this.onClose}>Button</Button>
        <Button.Primary>Button Primary</Button.Primary>
        <Button.Primary>Button Primary</Button.Primary>
        <Button.Primary loading>Button Primary</Button.Primary>
        <Button.Primary suffixIcon="Add">Button Primary</Button.Primary>
        <Button.Text color="blue">Button Primary</Button.Text>
        <Button.Link color="light-red">Button Primary</Button.Link>
        <Button.Group justify="between">
          <Button.Primary>Button Primary</Button.Primary>
          <Button.Primary>Button Primary</Button.Primary>
        </Button.Group>
      </div>
    );
  },
});
