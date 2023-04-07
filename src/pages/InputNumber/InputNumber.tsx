import { defineComponent } from "vue";
import { Input, Typography } from "sl-vue2-template";

const { P } = Typography;

export default defineComponent({
  data(): {
    value: number;
    value2: number;
  } {
    return {
      value: 0,
      value2: 12,
    };
  },
  render() {
    return (
      <div>
        <P>默认</P>
        <Input.Number
          value={this.value}
          handlerChange={(value) => {
            return (this.value = value);
          }}
        />
        <Input.Number
          value={this.value2}
          handlerChange={(value2) => {
            return (this.value2 = value2);
          }}
        />
        <P>disabled</P>
        <Input.Number
          value={this.value}
          handlerChange={(value) => {
            return (this.value = value);
          }}
          disabled
        />
        <P>readonly</P>
        <Input.Number
          value={this.value}
          handlerChange={(value) => {
            return (this.value = value);
          }}
          readonly
        />
        <P>max and min step</P>
        <Input.Number
          value={this.value}
          handlerChange={(value) => {
            return (this.value = value);
          }}
          max={20}
          min={10}
          step={2}
        />
        <P>decimal</P>
        <Input.Number
          value={this.value}
          handlerChange={(value) => {
            return (this.value = value);
          }}
          decimal
          step={0.01}
        />
      </div>
    );
  },
});
