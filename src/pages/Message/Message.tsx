import { defineComponent } from "vue";
import { Message, Button } from "sl-vue2-template";

export default defineComponent({
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onShowMessage(type: "error" | "success" | "warning", animation?: boolean) {
      if (type === "success") {
        Message.success("Success", {
          duration: 5000,
          animation,
          callBack: () => {},
        });
        return;
      }
      if (type === "error") {
        Message.error("Error", {
          animation,
        });
        return;
      }
      Message.warning("Warning", {
        animation,
      });
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
        </Button>{" "}
        <Button
          handlerClick={() => {
            this.onShowMessage("success", false);
          }}
        >
          open success 关闭动画
        </Button>
        <Button
          handlerClick={() => {
            this.onShowMessage("error", false);
          }}
        >
          open error 关闭动画
        </Button>
        <Button
          handlerClick={() => {
            this.onShowMessage("warning", false);
          }}
        >
          open warning 关闭动画
        </Button>
      </div>
    );
  },
});
