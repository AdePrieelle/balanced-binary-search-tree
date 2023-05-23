export const cloneObject = (obj) => {
  if (typeof(obj) !== "object") {
    return null;
  };
  const clonedObject = {...obj};
  return clonedObject;
};
