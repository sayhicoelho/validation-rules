const BaseRule = require("./BaseRule");

class Rule extends BaseRule {
  required() {
    return this.registerValidation("required");
  }

  string() {
    return this.registerValidation("string");
  }

  email() {
    return this.registerValidation("email");
  }

  confirmed(toMatch) {
    return this.registerValidation("confirmed", toMatch);
  }

  minlength(min) {
    return this.registerValidation("minlength", min);
  }

  maxlength(max) {
    return this.registerValidation("maxlength", max);
  }

  length(length) {
    return this.registerValidation("length", length);
  }

  unique(model, ignoreId = null) {
    return this.registerValidation("unique", model, ignoreId);
  }

  phone() {
    return this.registerValidation("phone");
  }
}

module.exports = Rule;
