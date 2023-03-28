import { defineComponent } from "vue";
import { Tabs, Typography } from "sl-vue2-template";

const { H5 } = Typography;

export default defineComponent({
  data() {
    return {
      active: 1,
    };
  },
  render() {
    return (
      <div>
        <Tabs active={this.active}>
          <Tabs.Pane
            mark={1}
            tab="Pane1"
            icon={{
              name: "Add Circle",
            }}
          >
            Tabs.Pane1
          </Tabs.Pane>
          <Tabs.Pane
            mark={2}
            tab="Pane222222222222222"
            icon={{
              name: "Add Circle",
              placement: "left",
            }}
          >
            <H5>Test</H5>
            Tabs.Pane2222222
          </Tabs.Pane>
          <Tabs.Pane
            mark={3}
            tab="Pane3333333333333333333333333333333333333333"
            icon={{
              name: "Arrow Down Filling",
              placement: "left",
              color: "blue",
              size: "32",
            }}
          >
            Tabs.Pane33333333333333333
          </Tabs.Pane>
        </Tabs>
        <Tabs active="2" animation={false}>
          <Tabs.Pane mark="1" tab="Pane1">
            Tabs.Pane1
          </Tabs.Pane>
          <Tabs.Pane mark="2" tab="Pane222222222222222" disabled>
            Tabs.Pane2222222
          </Tabs.Pane>
          <Tabs.Pane
            mark="3"
            tab="Pane3333333333333333333333333333333333333333"
          >
            Tabs.Pane33333333333333333
          </Tabs.Pane>
          <Tabs.Pane mark="4" tab="Tabs.Pane4">
            Tabs.Pane4
          </Tabs.Pane>
        </Tabs>
      </div>
    );
  },
});
