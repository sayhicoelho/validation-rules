module.exports = async (attribute, value, params, data) => {
  const pattern = /^[0-9]{13}$/;

  if (!pattern.test(value)) return `The ${attribute} format is invalid.`;
};
