export const getIsArrayWithoutDuplicates = (array) => {
  if (
    (!(Array.isArray(array)))
  ) {
    return (false);
  };

  const isArrayWithoutDuplicates = (((new Set(array)).size) === (array.length));

  return (isArrayWithoutDuplicates);
};
