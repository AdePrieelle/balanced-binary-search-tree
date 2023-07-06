export const getIsValidInputValueCreateBST = (
  isValidInputFormat
) => {
  if (
    typeof(isValidInputFormat) !== "boolean" 
  ) {
    return (false);
  };

  if (!isValidInputFormat) {
    return (false);
  };

  return (true);
};
