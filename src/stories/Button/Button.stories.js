import Button from "../../component/button/Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: {action: "handleClick"}},
}

const Template = args => <Button {...args} />

export const Red = Template.bind({});
Red.args = {
  backgroundColor : "red",
  label: "click",
  size: "md"
}

export const Green = Template.bind({});
Green.args = {
  backgroundColor : "green",
  label: "click",
  size: "md"
}

export const Large = Template.bind({});
Large.args = {
  backgroundColor : "red",
  label: "click",
  size: "lg"
}

export const Medium = Template.bind({});
Medium.args = {
  backgroundColor : "red",
  label: "click",
  size: "md"
}

export const Small = Template.bind({});
Small.args = {
  backgroundColor : "red",
  label: "click",
  size: "sm"
}