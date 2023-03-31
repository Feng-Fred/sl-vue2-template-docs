import { defineComponent } from "vue";
import { Grid, Radio } from "sl-vue2-template";

const { Col, Row } = Grid;

export default defineComponent({
  data() {
    return {
      checked: false,
      value: "",
    };
  },
  methods: {
    onChange() {
      this.checked = !this.checked;
    },
  },
  render() {
    return (
      <div>
        <Radio checked={this.checked} handlerChange={this.onChange}>
          Radio
        </Radio>
        <Radio checked={this.checked} handlerChange={this.onChange} disabled>
          Radio
        </Radio>
        <Radio
          checked={this.checked}
          handlerChange={(checked) => {
            return (this.checked = checked);
          }}
          color="blue"
          animation={false}
        >
          Radio1
        </Radio>
        <Radio
          checked={this.checked}
          handlerChange={(checked) => {
            return (this.checked = checked);
          }}
          color="waring"
        >
          Radio
        </Radio>
        <Radio
          checked={this.checked}
          handlerChange={() => {
            return (this.checked = !this.checked);
          }}
          color="blue"
        >
          Radio
        </Radio>
        <br />
        <br />
        单选组群
        <br />
        <Radio.Group
          value={this.value}
          handlerChange={(value) => {
            this.value = value;
          }}
        >
          <Radio value={1}>Apple</Radio>
          <Radio value={2}>Pear</Radio>
          <Radio value={3}>Orange</Radio>
        </Radio.Group>
        <Radio.Group
          value={this.value}
          handlerChange={(value) => {
            this.value = value;
          }}
          color="blue"
        >
          <Radio value="1">Apple</Radio>
          <Radio value="2">Pear</Radio>
          <Radio value="3">Orange</Radio>
          <Radio value="4">Orange1</Radio>
        </Radio.Group>
        <Radio.Group
          value={this.value}
          handlerChange={(value) => {
            this.value = value;
          }}
          color="blue"
          disabled
        >
          <Col>
            <Row>
              <Radio value="1">Apple</Radio>
              <Radio value="2">Pear</Radio>
            </Row>
            <Radio value="3">Orange</Radio>
            <Radio value="4">Orange1</Radio>
          </Col>
        </Radio.Group>
        单选组群 关闭动画
        <br />
        <Radio.Group
          value={this.value}
          handlerChange={(value) => {
            this.value = value;
          }}
          animation={false}
        >
          <Radio value={1}>Apple</Radio>
          <Radio value={2}>Pear</Radio>
          <Radio value={3}>Orange</Radio>
        </Radio.Group>
      </div>
    );
  },
});
