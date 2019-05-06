# validation-rules
A simple validator for Javascript.

## Install
Using NPM:
```bash
$ npm install validation-rules
```
Using Yarn:
```bash
$ yarn add validation-rules
```

## Usage
```js
const { validator, Rule } = require("validation-rules");

const data = {
  name: "Josh",
  username: "josh",
  password: "secret",
  password_confirmation: "secreeet"
};

const rules = [
  new Rule("name")
    .required()
    .string()
    .minlength(3),
  new Rule("username")
    .required()
    .string()
    .minlength(6),
  new Rule("password")
    .required()
    .string()
    .minlength(6),
  new Rule("password_confirmation")
    .required()
    .string()
    .minlength(6)
    .confirmed("password")
];

validator
  .validate(data, rules)
  .then(() => console.log("Passed!"))
  .catch(errors => console.error(errors));
```
The output should be:
```js
[
  {
    attribute: 'username',
    message: 'The username must be at least 6 characters.'
  },
  {
    attribute: 'password_confirmation',
    message: 'The password_confirmation does not match.'
  }
]
```

## Extending custom validations
```js
const { validator, Rule } = require("validation-rules");

class CustomRule extends Rule {
  customValidation() {
    this.registerValidation(async (attribute, value, data) => {
      const pattern = /^[0-9]{13}$/;

      if (!pattern.test(value)) return `The ${attribute} format is invalid.`;
    });

    return this;
  }
}

const data = {
  phone: "5521974558412abc"
};

const rules = [
  new CustomRule("phone")
    .required()
    .string()
    .customValidation()
];

validator
  .validate(data, rules)
  .then(() => console.log("Passed!"))
  .catch(errors => console.error(errors));
```
The output should be:
```js
[
  {
    attribute: 'phone', message: 'The phone format is invalid.'
  }
]
```

## License
MIT
