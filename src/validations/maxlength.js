module.exports = async (attribute, value, [max], data) => {
  if (value.length > max)
    return `The ${attribute} may not be greater than ${max} characters.`;
};
