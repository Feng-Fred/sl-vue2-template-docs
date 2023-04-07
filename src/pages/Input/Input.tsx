import { defineComponent } from "vue";
import { Typography, Input } from "sl-vue2-template";

const { P } = Typography;

export default defineComponent({
  data() {
    return {
      value: "1234567890",
      maskValue: "07915845032",
      number: 0,
      decimal: 0,
      number2: -10,
      password: "",
      email: "",
      card: "",
      payment: "",
      phoneNumber: "",
      telNumber: "",
      price: "",
    };
  },
  render() {
    return (
      <div>
        <P>number</P>
        <Input
          type="number"
          value={this.number}
          handlerChange={(number) => {
            return (this.number = number);
          }}
        />
        <P>number decimal</P>
        <Input
          type="number"
          value={this.decimal}
          decimal
          handlerChange={(number) => {
            return (this.decimal = number);
          }}
        />
        <P>number mask</P>
        <Input
          type="number"
          value={this.number}
          handlerChange={(number) => {
            return (this.number = number);
          }}
          mask="000,000,000"
          maxLength={9}
        />
        <P>password</P>
        <Input
          type="password"
          value={this.password}
          handlerChange={(password) => {
            return (this.password = password);
          }}
        />
        <P>email</P>
        <Input
          type="email"
          value={this.email}
          handlerChange={(email) => {
            return (this.email = email);
          }}
        />
        <P>card</P>
        <Input
          type="card"
          value={this.card}
          handlerChange={(card) => {
            return (this.card = card);
          }}
        />
        <P>payment</P>
        <Input
          type="payment"
          value={this.payment}
          handlerChange={(payment) => {
            return (this.payment = payment);
          }}
        />
        <P>phoneNumber</P>
        <Input
          type="phone-number"
          value={this.phoneNumber}
          handlerChange={(phoneNumber) => {
            return (this.phoneNumber = phoneNumber);
          }}
        />
        <P>telNumber</P>
        <Input
          type="tel-number"
          value={this.telNumber}
          handlerChange={(telNumber) => {
            return (this.telNumber = telNumber);
          }}
        />
        <P>price</P>
        <Input
          type="price"
          value={this.price}
          handlerChange={(price) => {
            return (this.price = price);
          }}
        />
        <P>默认</P>
        <Input
          value={this.value}
          handlerChange={(value) => {
            return (this.value = value);
          }}
        />
        <P>readonly</P>
        <Input
          value={this.value}
          placeholder="readonly"
          handlerChange={(value) => {
            return (this.value = value);
          }}
          readonly
        />
        <P>disabled</P>
        <Input
          value={this.value}
          placeholder="disabled"
          handlerChange={(value) => {
            return (this.value = value);
          }}
          disabled
        />
        <P>placeholder</P>
        <Input
          value={this.value}
          placeholder="placeholder"
          handlerChange={(value) => {
            return (this.value = value);
          }}
        />
        <P>prefix and suffix</P>
        <Input
          value={this.value}
          placeholder="placeholder"
          handlerChange={(value) => {
            return (this.value = value);
          }}
          prefix="￥"
          suffix="RMB"
        />
        <P>icon left</P>
        <Input
          value={this.value}
          placeholder="placeholder"
          handlerChange={(value) => {
            return (this.value = value);
          }}
          icon={{
            name: "Add",
            placement: "left",
          }}
        />
        <P>icon right</P>
        <Input
          value={this.value}
          placeholder="placeholder"
          handlerChange={(value) => {
            return (this.value = value);
          }}
          icon={{
            name: "Arrow Down Bold",
            placement: "right",
          }}
        />
        <P>maxLength</P>
        <Input
          value={this.value}
          handlerChange={(value) => {
            return (this.value = value);
          }}
          maxLength={4}
        />
        <P>number maxLength</P>
        <Input
          value={this.value}
          handlerChange={(value) => {
            return (this.value = value);
          }}
          maxLength={4}
        />
        <P>mask 0000-00000000</P>
        <Input
          value={this.maskValue}
          handlerChange={(maskValue) => {
            return (this.maskValue = maskValue);
          }}
          mask="0791-12345678"
        />
        <P>mask (0000) 000-0000</P>
        <Input
          value={this.value}
          handlerChange={(value) => {
            return (this.value = value);
          }}
          mask="(0000) 000-0000"
          maxLength={10}
        />
        <P>mask 0000 0000 0000 0000</P>
        <Input
          value={this.value}
          handlerChange={(value) => {
            return (this.value = value);
          }}
          mask="0000 0000 0000 0000"
        />
      </div>
    );
  },
});
