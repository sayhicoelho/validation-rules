const closures = require("./validations");

class Validator {
  async validate(data, rules) {
    const errors = [];

    for (let rule of rules) {
      const { attribute, validations } = rule;

      for (let validation of validations) {
        const value = data[attribute];
        const params = validation.params;
        const error = await closures[validation.name](
          attribute,
          value,
          params,
          data
        );

        if (error) {
          errors.push({ attribute, message: error });
          break;
        }
      }
    }

    if (errors.length > 0) throw errors;
  }
}

module.exports = Validator;
