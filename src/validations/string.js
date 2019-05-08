module.exports = async (attribute, value, params, data) => {
  if (typeof value !== "string") return `The ${attribute} must be a string.`;
};
