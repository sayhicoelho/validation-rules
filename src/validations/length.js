module.exports = async (attribute, value, [length], data) => {
  if (value.length != length)
    return `The ${attribute} must be ${length} characters.`;
};
