import { defineComponent } from "vue";
import { Switch } from "sl-vue2-template";

export default defineComponent({
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    onSwitch() {
      this.checked = !this.checked;
    },
  },
  render() {
    return (
      <div>
        <Switch checked={this.checked} handlerChange={this.onSwitch}>
          Switch
        </Switch>
        <Switch
          size="small"
          checked={this.checked}
          handlerChange={this.onSwitch}
          color="blue"
        >
          Switch
        </Switch>
        <Switch
          checked={this.checked}
          handlerChange={this.onSwitch}
          color="blue"
          disabled
          animation={false}
        >
          Switch
        </Switch>
      </div>
    );
  },
});
