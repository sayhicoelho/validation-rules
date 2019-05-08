module.exports = async (attribute, value, [model, ignoreId], data) => {
  const exists =
    (await model.countDocuments({
      _id: { $ne: ignoreId },
      [attribute]: value
    })) > 0;

  if (exists) return `The ${attribute} has already been taken.`;
};
