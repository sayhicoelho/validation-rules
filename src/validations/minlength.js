module.exports = async (attribute, value, [min], data) => {
  if (value.length < min)
    return `The ${attribute} must be at least ${min} characters.`;
};
