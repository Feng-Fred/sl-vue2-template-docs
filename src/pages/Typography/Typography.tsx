import { defineComponent } from "vue";
import { Typography } from "sl-vue2-template";

const { H1, H2, H3, H4, H5, Text, P } = Typography;

export default defineComponent({
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onShowModel() {
      this.show = !this.show;
    },
  },
  render() {
    return (
      <div>
        <H1 color="error" handlerClick={this.onShowModel}>
          TEST1
        </H1>
        <H2>TEST2</H2>
        <H3>TEST3</H3>
        <H4>TEST4</H4>
        <H5>TEST5</H5>
        <Text handlerClick={this.onShowModel}>Text</Text>
        <br />
        <Text handlerClick={this.onShowModel} disabled>
          Text
        </Text>
        <br />
        <Text.Link size="40" handlerClick={this.onShowModel}>
          link
        </Text.Link>
        <br />
        <Text.Link handlerClick={this.onShowModel}>link</Text.Link>
        <br />
        <Text.Link handlerClick={this.onShowModel} disabled>
          link disabled
        </Text.Link>
        <P>
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph{" "}
          <Text.Link handlerClick={this.onShowModel}>link</Text.Link>
        </P>
        <Text.Link handlerClick={this.onShowModel}>link</Text.Link>
        <P ellipsis>
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph
        </P>
        <Text.Link
          fontStyle="italic"
          weight="700"
          handlerClick={this.onShowModel}
        >
          link
        </Text.Link>
        <P ellipsis="4">
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph
        </P>
      </div>
    );
  },
});
