export const getArrayFromString = (string, delimiter) => {
  if (typeof(string) !== "string") {
    return [];
  };

  const copyString = string;
  const arrayFromString = copyString.split(delimiter);
  
  return arrayFromString;
};
