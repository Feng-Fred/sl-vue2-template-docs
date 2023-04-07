import { defineComponent } from "vue";
import { Input, Typography } from "sl-vue2-template";

const { P } = Typography;

export default defineComponent({
  data() {
    return {
      value: "",
      value2: "1234567890",
    };
  },
  render() {
    return (
      <div>
        <P>默认</P>
        <Input.Textarea
          value={this.value}
          handlerChange={(value) => {
            return (this.value = value);
          }}
          placeholder="shahs"
        />
        <P>disabled</P>
        <Input.Textarea value={this.value2} disabled />
        <P>readonly</P>
        <Input.Textarea value={this.value2} readonly />
      </div>
    );
  },
});
