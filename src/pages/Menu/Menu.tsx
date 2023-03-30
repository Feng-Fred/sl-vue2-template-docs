import { defineComponent } from "vue";
import { Typography, Icon, Menu } from "sl-vue2-template";

const { P } = Typography;

export default defineComponent({
  methods: {
    onClick() {
      console.log("--->1");
    },
  },
  render() {
    return (
      <div>
        <P>Menu 默认1</P>
        <Menu style={{ width: "256px" }}>
          <Menu.Item mark="1" handlerClick={this.onClick}>
            <Icon name="Add Bold" size="20" />
            Navigation 1
          </Menu.Item>
          <Menu.Item mark="2" disabled>
            Navigation 2
          </Menu.Item>
          <Menu.Item mark="3">Navigation 3</Menu.Item>
          <Menu.Item mark="4">Navigation 4</Menu.Item>
        </Menu>
        <P>Menu 默认 Number</P>
        <Menu active={2} style={{ width: "256px" }}>
          <Menu.Item mark={1} handlerClick={this.onClick}>
            <Icon name="Add Bold" size="20" />
            Navigation 1
          </Menu.Item>
          <Menu.Item mark={2} disabled>
            Navigation 2
          </Menu.Item>
          <Menu.Item mark={3}>Navigation 3</Menu.Item>
          <Menu.Item mark={4}>Navigation 4</Menu.Item>
        </Menu>
        <P>Menu 变色</P>
        <Menu active="1" color="blue" style={{ width: "256px" }}>
          <Menu.Item mark="1">
            <Icon name="Add Bold" size="20" />
            Navigation 1
          </Menu.Item>
          <Menu.Item mark="2" disabled>
            Navigation 2
          </Menu.Item>
          <Menu.Item mark="3">Navigation 3</Menu.Item>
          <Menu.Item mark="4">Navigation 4</Menu.Item>
        </Menu>
        <P>Menu 有背景， 变色</P>
        <div style={{ background: "#c00000", color: "white", width: "256px" }}>
          <Menu active="1" color="white" hiddenBorder>
            <Menu.Item mark="1">
              <Icon name="Add Bold" size="20" />
              Navigation 1
            </Menu.Item>
            <Menu.Item mark="2" disabled>
              Navigation 2
            </Menu.Item>
            <Menu.Item mark="3">Navigation 3</Menu.Item>
            <Menu.Item mark="4">Navigation 4</Menu.Item>
          </Menu>
        </div>
        <P>Menu Group 默认</P>
        <Menu active="1">
          <Menu.Group mark="1">
            <Menu.Group.Header>Navigation 1 Header</Menu.Group.Header>
            <Menu.Group.Content>
              <Menu.Item mark="1-1" disabled>
                Navigation 1-1
              </Menu.Item>
              <Menu.Item mark="1-2">Navigation 1-2</Menu.Item>
              <Menu.Item mark="1-3">Navigation 1-3</Menu.Item>
            </Menu.Group.Content>
          </Menu.Group>
          <Menu.Group mark="2">
            <Menu.Group.Header>
              <Icon name="Add Bold" size="20" />
              Navigation 2 Header
            </Menu.Group.Header>
            <Menu.Group.Content>
              <Menu.Item mark="2-1">Navigation 2-1</Menu.Item>
              <Menu.Item mark="2-2">Navigation 2-2</Menu.Item>
              <Menu.Group mark="2-3">
                <Menu.Group.Header>
                  <Icon name="Add Bold" size="20" />
                  Navigation 2-3 Header
                </Menu.Group.Header>
                <Menu.Group.Content>
                  <Menu.Item mark="2-3-1">Navigation 2-3-1</Menu.Item>
                  <Menu.Item mark="2-3-2">Navigation 2-3-2</Menu.Item>
                  <Menu.Item mark="2-3-3">Navigation 2-3-3</Menu.Item>
                </Menu.Group.Content>
              </Menu.Group>
            </Menu.Group.Content>
          </Menu.Group>
        </Menu>
        <P>Menu Group 变色</P>
        <div style={{ background: "#c00000", color: "white", width: "256px" }}>
          <Menu active="1" color="white" hiddenBorder>
            <Menu.Item mark="1-0">Navigation 0</Menu.Item>
            <Menu.Group mark="1">
              <Menu.Group.Header>Navigation 1 Header</Menu.Group.Header>
              <Menu.Group.Content>
                <Menu.Item mark="1-1">Navigation 1-1</Menu.Item>
                <Menu.Item mark="1-2">Navigation 1-2</Menu.Item>
                <Menu.Item mark="1-3">Navigation 1-3</Menu.Item>
              </Menu.Group.Content>
            </Menu.Group>
            <Menu.Group mark="2">
              <Menu.Group.Header>
                <Icon name="Add Bold" size="20" />
                Navigation 2 Header
              </Menu.Group.Header>
              <Menu.Group.Content>
                <Menu.Item mark="2-1">Navigation 2-1</Menu.Item>
                <Menu.Item mark="2-2">Navigation 2-2</Menu.Item>
                <Menu.Group mark="2-3" disabled>
                  <Menu.Group.Header>
                    <Icon name="Add Bold" size="20" />
                    Navigation 2-3 Header
                  </Menu.Group.Header>
                  <Menu.Group.Content>
                    <Menu.Item mark="2-3-1">Navigation 2-3-1</Menu.Item>
                    <Menu.Item mark="2-3-2">Navigation 2-3-2</Menu.Item>
                    <Menu.Item mark="2-3-3">Navigation 2-3-3</Menu.Item>
                  </Menu.Group.Content>
                </Menu.Group>
              </Menu.Group.Content>
            </Menu.Group>
          </Menu>
        </div>{" "}
        <P>Menu Group Number 默认</P>
        <Menu active={11}>
          <Menu.Group mark={1} show>
            <Menu.Group.Header>Navigation 1 Header</Menu.Group.Header>
            <Menu.Group.Content>
              <Menu.Item mark={11} disabled>
                Navigation 1-1
              </Menu.Item>
              <Menu.Item mark={12}>Navigation 1-2</Menu.Item>
              <Menu.Item mark={14}>Navigation 1-3</Menu.Item>
            </Menu.Group.Content>
          </Menu.Group>
          <Menu.Group mark={2}>
            <Menu.Group.Header>
              <Icon name="Add Bold" size="20" />
              Navigation 2 Header
            </Menu.Group.Header>
            <Menu.Group.Content>
              <Menu.Item mark={21}>Navigation 2-1</Menu.Item>
              <Menu.Item mark={22}>Navigation 2-2</Menu.Item>
              <Menu.Group mark={23}>
                <Menu.Group.Header>
                  <Icon name="Add Bold" size="20" />
                  Navigation 2-3 Header
                </Menu.Group.Header>
                <Menu.Group.Content>
                  <Menu.Item mark={24}>Navigation 2-3-1</Menu.Item>
                  <Menu.Item mark={25}>Navigation 2-3-2</Menu.Item>
                  <Menu.Item mark={26}>Navigation 2-3-3</Menu.Item>
                </Menu.Group.Content>
              </Menu.Group>
            </Menu.Group.Content>
          </Menu.Group>
        </Menu>
      </div>
    );
  },
});
