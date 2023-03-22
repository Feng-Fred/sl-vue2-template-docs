import { defineComponent } from "vue";
import { Button, Drawer, Select } from "sl-vue2-template";

export default defineComponent({
  data() {
    return {
      show: false,
      showRight: false,
      showLeft: false,
      showTop: false,
      showBottom: false,
      text: "Test",
      value: 0,
      options: [
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
    };
  },
  methods: {
    onShow() {
      this.show = !this.show;
    },
    onShowRight() {
      this.showRight = !this.showRight;
    },
    onShowLeft() {
      this.showLeft = !this.showLeft;
    },
    onShowTop() {
      this.showTop = !this.showTop;
    },
    onShowBottom() {
      this.showBottom = !this.showBottom;
    },
    onChange(value: number) {
      this.value = value;
    },
  },
  render() {
    return (
      <div>
        <Button.Primary handlerClick={this.onShow}>open</Button.Primary>
        <Drawer show={this.show} handlerClose={this.onShow}>
          <Drawer.Head>标题{this.text}-1</Drawer.Head>
          <Drawer.Content>{Text}</Drawer.Content>
          <Drawer.Foot>
            <Button.Primary
              handlerClick={() => {
                this.text = "-测试值";
              }}
            >
              确定
            </Button.Primary>
            <Button.Text handlerClick={this.onShow}>取消</Button.Text>
          </Drawer.Foot>
        </Drawer>
        <Button.Primary handlerClick={this.onShowRight}>
          open right
        </Button.Primary>
        <Drawer
          show={this.showRight}
          handlerClose={this.onShowRight}
          placement="right"
          full
        >
          <Drawer.Head>Right标题</Drawer.Head>
          <Drawer.Content>
            内容
            <Select
              value={this.value}
              options={this.options}
              handlerChange={(value) => {
                this.onChange(value);
              }}
            />
          </Drawer.Content>
          <Drawer.Foot>
            <Button.Primary handlerClick={this.onShowRight}>
              确定
            </Button.Primary>
            <Button.Text handlerClick={this.onShowRight}>取消</Button.Text>
          </Drawer.Foot>
        </Drawer>
        <Button.Primary handlerClick={this.onShowLeft}>
          open left
        </Button.Primary>
        <Drawer
          show={this.showLeft}
          handlerClose={this.onShowLeft}
          placement="left"
        >
          <Drawer.Head>Left标题</Drawer.Head>
          <Drawer.Content>
            <Select
              value={this.value}
              options={this.options}
              handlerChange={(value) => {
                this.onChange(value);
              }}
            />
            {Text}
          </Drawer.Content>
          <Drawer.Foot>
            <Button.Primary handlerClick={this.onShowLeft}>确定</Button.Primary>
            <Button.Text handlerClick={this.onShowLeft}>取消</Button.Text>
          </Drawer.Foot>
        </Drawer>
        <Drawer
          show={this.showTop}
          handlerClose={this.onShowTop}
          placement="top"
          animation={false}
        >
          <Drawer.Head>Top标题</Drawer.Head>
          <Drawer.Content>{Text}</Drawer.Content>
          <Drawer.Foot>
            <Button.Primary handlerClick={this.onShowTop}>确定</Button.Primary>
            <Button.Text handlerClick={this.onShowTop}>取消</Button.Text>
          </Drawer.Foot>
        </Drawer>
        <Button.Primary handlerClick={this.onShowTop}>open top</Button.Primary>
        <Button.Primary handlerClick={this.onShowTop} disabled>
          open disabled
        </Button.Primary>
        <Button.Text handlerClick={this.onShowTop} disabled>
          open disabled
        </Button.Text>
        <Button.Link handlerClick={this.onShowTop} disabled>
          open disabled
        </Button.Link>
        <Button.Primary handlerClick={this.onShowBottom}>
          open bottom
        </Button.Primary>
        <Drawer
          show={this.showBottom}
          handlerClose={this.onShowBottom}
          placement="bottom"
        >
          <Drawer.Head>Bottom标题</Drawer.Head>
          <Drawer.Content>
            {Text}
            <Select
              value={this.value}
              options={this.options}
              handlerChange={(value) => {
                this.onChange(value);
              }}
            />
          </Drawer.Content>
          <Drawer.Foot>
            <Button.Primary handlerClick={this.onShowBottom}>
              确定
            </Button.Primary>
            <Button.Text handlerClick={this.onShowBottom}>取消</Button.Text>
          </Drawer.Foot>
        </Drawer>
      </div>
    );
  },
});

const Text =
  "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容1";
