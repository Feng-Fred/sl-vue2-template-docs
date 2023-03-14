import { Select } from "sl-vue2-template";
import { defineComponent } from "vue";

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
      </div>
    );
  },
});
