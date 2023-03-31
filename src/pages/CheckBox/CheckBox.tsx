import { defineComponent } from "vue";
import { Typography, Grid, CheckBox } from "sl-vue2-template";

const { H1, P } = Typography;
const { Col, Row } = Grid;

interface ListType {
  value: string;
  checked: boolean;
  label: string;
}

export default defineComponent({
  data() {
    return {
      checked: false,
      label: "全选",
      values: [4],
      options: [
        {
          value: 1,
          label: "Apple",
        },
        {
          value: 2,
          label: "Orange",
        },
        {
          value: 3,
          label: "Orange1",
          disabled: true,
        },
        {
          value: 4,
          label: "Orange3",
          default: true,
        },
      ],
      values2: [],
      options2: [
        {
          value: "1",
          label: "Apple",
        },
        {
          value: "2",
          label: "Orange",
        },
        {
          value: "3",
          label: "Orange1",
        },
        {
          value: "5",
          label: "Orange2",
        },
        {
          value: "4",
          label: "Orange3",
        },
      ],
      checkedAll: false,
      indeterminate: false,
      list: [
        {
          value: "1",
          checked: false,
          label: "Apple",
        },
        {
          value: "2",
          checked: false,
          label: "Orange",
        },
        {
          value: "3",
          checked: false,
          label: "Pear",
        },
      ],
    };
  },
  methods: {
    onChange() {
      this.checked = !this.checked;
    },
    onChangeAll() {
      if (this.checkedAll) {
        this.checkedAll = false;
        this.list.forEach((i) => {
          if (i.checked) {
            i.checked = false;
          }
        });
        return;
      }
      this.checkedAll = true;
      this.list.forEach((i) => {
        if (!i.checked) {
          i.checked = true;
        }
      });
    },
    onChangeChecked(item: ListType) {
      if (item.checked) {
        item.checked = false;
      } else {
        item.checked = true;
      }

      const list = this.list.filter((i) => {
        return i.checked;
      });
      if (list.length === this.list.length) {
        this.checkedAll = true;
        this.indeterminate = false;
      } else if (list.length === 0) {
        this.checkedAll = false;
        this.indeterminate = false;
      } else {
        this.checkedAll = false;
        this.indeterminate = true;
      }
    },
  },
  render() {
    return (
      <div>
        <P className="mb-4">复选框,无label</P>
        <CheckBox
          checked={this.checked}
          handlerChange={(v) => {
            this.checked = v;
          }}
        />
        <br />
        <P className="mb-4">复选框</P>
        <CheckBox
          checked={this.checked}
          handlerChange={(v) => {
            this.checked = v;
          }}
          animation={false}
        >
          <H1>CheckBox</H1>
        </CheckBox>
        <CheckBox checked={this.checked} handlerChange={this.onChange}>
          CheckBox
        </CheckBox>
        <CheckBox
          checked={this.checked}
          handlerChange={(v) => {
            this.checked = v;
          }}
          color="blue"
          className="Test"
        >
          CheckBox
        </CheckBox>
        <CheckBox checked={this.checked} handlerChange={this.onChange} disabled>
          CheckBox disabled
        </CheckBox>
        <br />
        <P className="mb-4">复选框组群</P>
        <CheckBox.Group
          label={this.label}
          values={this.values}
          options={this.options}
          handlerChange={(values) => {
            this.values = values;
          }}
        />
        <br />
        <P className="mb-4">复选框组群, 变色，无label</P>
        <CheckBox.Group
          values={this.values2}
          options={this.options2}
          handlerChange={(values) => {
            this.values2 = values;
          }}
          color="blue"
          animation={false}
        />
        <br />
        <P className="mb-4">自定义全选</P>
        <Col>
          <Col>
            <Row className="mb-12">
              <CheckBox
                checked={this.checkedAll}
                indeterminate={this.indeterminate}
                handlerChange={this.onChangeAll}
              >
                全选4
              </CheckBox>
            </Row>
            <Row>
              {this.list.map((item) => {
                return (
                  <CheckBox
                    checked={item.checked}
                    handlerChange={() => {
                      this.onChangeChecked(item);
                    }}
                  >
                    {item.label}
                  </CheckBox>
                );
              })}
            </Row>
          </Col>
        </Col>
      </div>
    );
  },
});
