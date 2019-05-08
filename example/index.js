const { Validator } = require("..");
const Rule = require("./CustomRule");

const validator = new Validator("en");
const data = {
  name: "154512a",
  email: "sayhicoelhogmail.com",
  phone: "5521974558412",
  password: "secret",
  password_confirmation: "secrett"
};

const rules = [
  new Rule("name")
    .required()
    .string()
    .minlength(3)
    .regex(/^\d{1,}$/),
  new Rule("email")
    .required()
    .string()
    .email(),
  new Rule("password")
    .required()
    .string()
    .minlength(6),
  new Rule("password_confirmation")
    .required()
    .string()
    .minlength(6)
    .confirmed("password"),
  new Rule("phone")
    .required()
    .string()
    .phone()
];

validator
  .validate(data, rules)
  .then(() => console.log("Passed!"))
  .catch(errors => console.error(errors));
