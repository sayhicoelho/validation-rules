module.exports = async (attribute, value, params, data) => {
  if (value != data[toMatch]) return `The ${attribute} does not match.`;
};
