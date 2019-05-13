const { Rule } = require("..");
const Custom = require("./validations/Custom");

class CustomRule extends Rule {
  custom(value) {
    return this.registerValidation(new Custom(value));
  }
}

module.exports = CustomRule;
