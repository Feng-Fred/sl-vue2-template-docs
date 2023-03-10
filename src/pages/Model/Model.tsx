import { defineComponent } from "vue";
import { Button, Model } from "sl-vue2-template";

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
        <Model show={this.show} handlerClose={this.onClose}>
          <Model.Head>标题</Model.Head>
          <Model.Content>内容</Model.Content>
          <Model.Foot justify="center">
            <Button.Primary handlerClick={this.onClose}>确定</Button.Primary>
            <Button.Text handlerClick={this.onClose}>取消</Button.Text>
          </Model.Foot>
        </Model>
      </div>
    );
  },
});
