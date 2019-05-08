const utils = require("../utils");

module.exports = async (attribute, value, params, data) => {
  if (!utils.isEmail(value)) return `The ${attribute} must be a valid email.`;
};
