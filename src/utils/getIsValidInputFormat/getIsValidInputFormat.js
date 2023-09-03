export const getIsValidInputFormat = (input, regex) => {
  if (
       typeof(input) !== "string"
    || typeof(regex) !== "object"
  ) {
    return (false);
  };

  if ((regex.test(input)) === true) {
    return (true);
  };

  return (false);
};
