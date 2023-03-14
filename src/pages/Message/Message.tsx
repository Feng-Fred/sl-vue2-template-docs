import { defineComponent } from "vue";
import { Message, Button } from "sl-vue2-template";

export default defineComponent({
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onShowMessage(type: "error" | "success" | "warning") {
      if (type === "success") {
        Message.success("Success", {
          duration: 5000,
          callBack: () => {},
        });
        return;
      }
      if (type === "error") {
        Message.error("Error");
        return;
      }
      Message.warning("Warning");
    },
  },
  render() {
    return (
      <div>
        <Button
          handlerClick={() => {
            this.onShowMessage("success");
          }}
        >
          open success
        </Button>
        <Button
          handlerClick={() => {
            this.onShowMessage("error");
          }}
        >
          open error
        </Button>
        <Button
          handlerClick={() => {
            this.onShowMessage("warning");
          }}
        >
          open warning
        </Button>
      </div>
    );
  },
});
