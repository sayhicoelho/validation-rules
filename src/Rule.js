const BaseRule = require("./BaseRule");
const utils = require("./utils");

class Rule extends BaseRule {
  required() {
    this.registerValidation(async (attribute, value) => {
      if (!value) return `The ${attribute} is required.`;
    });

    return this;
  }

  string() {
    this.registerValidation(async (attribute, value) => {
      if (typeof value !== "string")
        return `The ${attribute} must be a string.`;
    });

    return this;
  }

  email() {
    this.registerValidation(async (attribute, value) => {
      if (!utils.isEmail(value))
        return `The ${attribute} must be a valid email.`;
    });

    return this;
  }

  confirmed(toMatch) {
    this.registerValidation(async (attribute, value, data) => {
      if (value != data[toMatch]) return `The ${attribute} does not match.`;
    });

    return this;
  }

  minlength(min) {
    this.registerValidation(async (attribute, value) => {
      if (value.length < min)
        return `The ${attribute} must be at least ${min} characters.`;
    });

    return this;
  }

  maxlength(max) {
    this.registerValidation(async (attribute, value) => {
      if (value.length > max)
        return `The ${attribute} may not be greater than ${max} characters.`;
    });

    return this;
  }

  length(length) {
    this.registerValidation(async (attribute, value) => {
      if (value.length != length)
        return `The ${attribute} must be ${length} characters.`;
    });

    return this;
  }

  unique(model) {
    this.registerValidation(async (attribute, value) => {
      const exists = (await model.countDocuments({ [attribute]: value })) > 0;

      if (exists) return `The ${attribute} has already been taken.`;
    });

    return this;
  }
}

module.exports = Rule;
