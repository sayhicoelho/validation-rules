const { Rule } = require("..");
const Regex = require("./validations/Regex");

class CustomRule extends Rule {
  regex(pattern) {
    return this.registerValidation(new Regex(pattern));
  }
}

module.exports = CustomRule;
