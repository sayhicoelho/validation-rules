const { Validator } = require("..");
const Rule = require("./CustomRule");
const messages = require("./customMessages");
const attributes = require("./customAttributes");

Validator.setCustomMessages(messages);
Validator.setCustomAttributes(attributes);

const validator = new Validator("pt");
const data = {
  name: "Renan",
  email: "sayhicoelho@gmail.com.com",
  phone: "5521974558412",
  password: "secret",
  password_confirmation: "secret"
};

const rules = [
  new Rule("name")
    .required()
    .string()
    .minlength(3)
    .regex(/^\w{1,}$/),
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
