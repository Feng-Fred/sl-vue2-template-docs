import { defineComponent } from "vue";
import { Typography, Collapse } from "sl-vue2-template";

const { H3, H4 } = Typography;

export default defineComponent({
  data() {
    return {
      show: false,
      active: [1],
      active2: [],
      active3: [],
    };
  },
  render() {
    return (
      <div>
        <H3
          handlerClick={() => {
            return (this.show = !this.show);
          }}
        >
          Open Collapse
        </H3>
        <Collapse active={this.show}>
          <Collapse.Panel>{Text}</Collapse.Panel>
        </Collapse>
        <H3>Collapse 禁用，默认展开</H3>
        <Collapse disabled active>
          <Collapse.Header>
            <H3>标题</H3>disabled active
          </Collapse.Header>
          <Collapse.Panel>折叠的内容</Collapse.Panel>
        </Collapse>
        <H3>Collapse</H3>
        <Collapse>
          <Collapse.Header>
            <H3>标题</H3>
            <H4>标题</H4>
          </Collapse.Header>
          <Collapse.Panel>{Text}</Collapse.Panel>
        </Collapse>
        <H3>Collapse 需要icon</H3>
        <Collapse>
          <Collapse.Header
            icon={{
              placement: "right",
            }}
          >
            Collapse
            标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
          </Collapse.Header>
          <Collapse.Panel>{Text}</Collapse.Panel>
        </Collapse>
        <H3>Collapse 内嵌Collapse</H3>
        <Collapse>
          <Collapse.Header
            icon={{
              placement: "left",
              size: "20",
            }}
          >
            Collapse
            标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
          </Collapse.Header>
          <Collapse.Panel>
            {Text}
            <Collapse active>
              <Collapse.Header
                icon={{
                  placement: "left",
                  color: "error",
                }}
              >
                Collapse
                标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
              </Collapse.Header>
              <Collapse.Panel>{Text}</Collapse.Panel>
            </Collapse>
          </Collapse.Panel>
        </Collapse>
        <H3>Collapse Group</H3>
        <Collapse.Group active={this.active}>
          <Collapse mark={1}>
            <Collapse.Header
              icon={{
                placement: "right",
              }}
            >
              Collapse1
            </Collapse.Header>
            <Collapse.Panel>
              {Text}
              <Collapse>
                <Collapse.Header
                  icon={{
                    placement: "right",
                  }}
                >
                  Collapse1 内嵌
                </Collapse.Header>
                <Collapse.Panel>{Text}</Collapse.Panel>
              </Collapse>
            </Collapse.Panel>
          </Collapse>
          <Collapse mark={2}>
            <Collapse.Header
              icon={{
                placement: "right",
              }}
            >
              Collapse2
            </Collapse.Header>
            <Collapse.Panel>{Text}</Collapse.Panel>
          </Collapse>
          <Collapse mark={3}>
            <Collapse.Header
              icon={{
                placement: "right",
              }}
            >
              Collapse3
            </Collapse.Header>
            <Collapse.Panel>
              {Text}
              <Collapse.Group active={this.active3}>
                <Collapse mark={1}>
                  <Collapse.Header
                    icon={{
                      placement: "right",
                    }}
                  >
                    Collapse1
                  </Collapse.Header>
                  <Collapse.Panel>
                    {Text}
                    <Collapse>
                      <Collapse.Header
                        icon={{
                          placement: "right",
                        }}
                      >
                        Collapse1 内嵌
                      </Collapse.Header>
                      <Collapse.Panel>{Text}</Collapse.Panel>
                    </Collapse>
                  </Collapse.Panel>
                </Collapse>
                <Collapse mark={2}>
                  <Collapse.Header
                    icon={{
                      placement: "right",
                    }}
                  >
                    Collapse2
                  </Collapse.Header>
                  <Collapse.Panel>{Text}</Collapse.Panel>
                </Collapse>
                <Collapse mark={3}>
                  <Collapse.Header
                    icon={{
                      placement: "right",
                    }}
                  >
                    Collapse3
                  </Collapse.Header>
                  <Collapse.Panel>{Text}</Collapse.Panel>
                </Collapse>
              </Collapse.Group>
            </Collapse.Panel>
          </Collapse>
        </Collapse.Group>
        <H3>Collapse Group accordion</H3>
        <Collapse.Group active={this.active2} accordion>
          <Collapse mark="1">
            <Collapse.Header
              icon={{
                placement: "right",
              }}
            >
              Collapse1
            </Collapse.Header>
            <Collapse.Panel>
              {Text}
              <Collapse>
                <Collapse.Header
                  icon={{
                    placement: "right",
                  }}
                >
                  Collapse1 内嵌
                </Collapse.Header>
                <Collapse.Panel>{Text}</Collapse.Panel>
              </Collapse>
            </Collapse.Panel>
          </Collapse>
          <Collapse mark="2">
            <Collapse.Header
              icon={{
                placement: "right",
              }}
            >
              Collapse2
            </Collapse.Header>
            <Collapse.Panel>{Text}</Collapse.Panel>
          </Collapse>
          <Collapse mark="3">
            <Collapse.Header
              icon={{
                placement: "right",
              }}
            >
              Collapse3
            </Collapse.Header>
            <Collapse.Panel>{Text}</Collapse.Panel>
          </Collapse>
        </Collapse.Group>
      </div>
    );
  },
});

const Text =
  "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容1";
