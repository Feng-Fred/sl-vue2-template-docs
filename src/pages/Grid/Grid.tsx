import { defineComponent } from "vue";
import { Button, Grid } from "sl-vue2-template";

const { Row, Col } = Grid;

export default defineComponent({
  render() {
    return (
      <div>
        <Row>
          <Button.Primary>Row1</Button.Primary>
          <Col>Row2</Col>
        </Row>
        <Row align="center">
          <Button.Primary>Row1</Button.Primary>
          <Col>Row2</Col>
        </Row>
        <Row justify="between">
          <Button.Primary>Row1</Button.Primary>
          <Col>Row2</Col>
        </Row>
        <Col>
          <Button.Primary>Col1</Button.Primary>
          <Col>Col2</Col>
        </Col>
        <Col align="center">
          <Button.Primary>Col1</Button.Primary>
          <Col>Col2</Col>
        </Col>
        <Col justify="between" style={{ height: "100px" }}>
          <Button.Primary>Col1</Button.Primary>
          <Col>Col2</Col>
        </Col>
      </div>
    );
  },
});
