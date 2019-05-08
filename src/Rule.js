const BaseRule = require("./BaseRule");
const Required = require("./validations/Required");
const String = require("./validations/String");
const Email = require("./validations/Email");
const Confirmed = require("./validations/Confirmed");
const MinLength = require("./validations/MinLength");
const MaxLength = require("./validations/MaxLength");
const Length = require("./validations/Length");
const Unique = require("./validations/Unique");
const Phone = require("./validations/Phone");

class Rule extends BaseRule {
  required() {
    return this.registerValidation(new Required());
  }

  string() {
    return this.registerValidation(new String());
  }

  email() {
    return this.registerValidation(new Email());
  }

  confirmed(toMatch) {
    return this.registerValidation(new Confirmed(toMatch));
  }

  minlength(min) {
    return this.registerValidation(new MinLength(min));
  }

  maxlength(max) {
    return this.registerValidation(new MaxLength(max));
  }

  length(length) {
    return this.registerValidation(new Length(length));
  }

  unique(model, ignoreId = null) {
    return this.registerValidation(new Unique(model, ignoreId));
  }

  phone() {
    return this.registerValidation(new Phone());
  }
}

module.exports = Rule;
