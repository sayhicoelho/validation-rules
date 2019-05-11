# validation-rules
A simple validator for Javascript.

> Please do not follow this documentation because it is outdated. I'm working to update it with the new features. See [example](https://github.com/sayhicoelho/validation-rules/tree/master/example) to understand how to use the latest version.

> Note: The lib is under development. Do not use it in production environment unless you know what are you doing.

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
## The registerValidation() method
This is the method you'll need to use to make custom validations. Here you must pass an async function that receives three parameters:

- **attribute**: The attribute's name.
- **value**: The attribute's value.
- **data**: The entire data you've passed before in validator.validate() method.

## Usage for validating Express requests
BaseRequest.js
```js
const { validator } = require("validation-rules");

class BaseRequest {
  async validate(req, res, next) {
    const rules = this.rules();

    validator
      .validate(req.body, rules)
      .then(() => next())
      .catch(errors => res.status(400).json({ errors }));
  }
}

module.exports = BaseRequest;
```
RegisterRequest.js
```js
const { Rule } = require("validation-rules");
const User = require("../schemas/userSchema");
const BaseRequest = require("./BaseRequest");

class RegisterRequest extends BaseRequest {
  rules() {
    return [
      new Rule("name")
        .required()
        .string()
        .minlength(3),
      new Rule("username")
        .required()
        .string()
        .minlength(6)
        .unique(User),
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
  }
}

module.exports = new RegisterRequest();
```
router.js
```js
const { Router } = require("express");
const registerRequest = require("./requests/RegisterRequest");
const authController = require("./controllers/authController");
const router = new Router();

/**
 * @param {String} [name]
 * @param {String} [username]
 * @param {String} [password]
 * @param {String} [password_confirmation]
 */
router.post("/register", registerRequest.validate.bind(registerRequest), authController.register);

module.exports = router;
```

## Important note
> As you can see, we've set a unique() method to assert our database has only one registry. Therefore, we've passed a User schema that is being created by Mongoose. If you need to make some changes to this method, you are encouraged to override it. By defaults this library uses Mongoose to perform some queries to our database.

## TODO
The below list are the features we need to add to this library to make it great.

- Add TypeScript to improve intellisense.
- Add tests.

## License
MIT
