import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onClose() {
      this.show = !this.show;
      console.log("--->show", this.show);
    },
  },
  render() {
    return <div>Button Page</div>;
  },
});
