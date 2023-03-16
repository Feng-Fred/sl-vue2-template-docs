import { Select, Typography } from "sl-vue2-template";
import { defineComponent } from "vue";

const { P } = Typography;

export default defineComponent({
  data() {
    return {
      value: 1,
      options: [
        {
          value: 1,
          label: "Test1",
        },
        {
          value: 2,
          label: "Test2",
        },
        {
          value: 3,
          label: "Test3",
          disabled: true,
        },
      ],
      valueA: "1",
      optionsA: [
        {
          value: "1",
          label: "Test1",
        },
        {
          value: "2",
          label: "Test2",
        },
        {
          value: "3",
          label: "Test3",
        },
      ],
      valueB: 0,
      optionsB: [
        {
          value: 1,
          label: "Test1Test1Test1Test1Test1Test1",
        },
        {
          value: 2,
          label: "Test2",
        },
        {
          value: 3,
          label: "Test3",
        },
        {
          value: 4,
          label: "Test4",
          disabled: true,
        },
        {
          value: 5,
          label: "Test5",
        },
        {
          value: 6,
          label: "Test6",
        },
        {
          value: 7,
          label: "测试",
        },
      ],
      valueC: [1, 2],
      OptionsC: [
        {
          value: 1,
          label: "Test1Test1Test1Test1Test1Test1",
        },
        {
          value: 2,
          label: "Test2",
          default: true,
        },
        {
          value: 3,
          label: "Test3",
        },
        {
          value: 4,
          label: "Test4",
          disabled: true,
        },
        {
          value: 5,
          label: "Test5",
        },
        {
          value: 6,
          label: "Test6",
        },
        {
          value: 7,
          label: "测试",
        },
      ],
    };
  },
  methods: {
    onChange(value: number) {
      this.value = value;
    },
  },
  render() {
    return (
      <div>
        <Select
          value={this.value}
          options={this.options}
          handlerChange={(value) => {
            this.onChange(value);
          }}
        />
        <Select
          value={this.value}
          options={this.options}
          handlerChange={(value) => {
            this.onChange(value);
          }}
          disabled
        />
        <Select
          value={this.valueA}
          options={this.optionsA}
          handlerChange={(value) => {
            this.valueA = value;
          }}
        />
        <P>Search</P>
        <Select.Search
          value={this.valueB}
          options={this.optionsB}
          handlerChange={(value) => {
            this.valueB = value;
          }}
        />
        <P>Multiple</P>
        <Select.Multiple
          value={this.valueC}
          options={this.OptionsC}
          handlerChange={(value) => {
            this.valueC = value;
          }}
        />
      </div>
    );
  },
});
