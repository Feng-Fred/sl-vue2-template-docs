import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import Layout from "./components/Layout";

export default defineComponent({
  render() {
    return (
      <Layout>
        <RouterView />
      </Layout>
    );
  },
});
