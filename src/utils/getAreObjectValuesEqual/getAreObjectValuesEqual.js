export const getAreObjectValuesEqual = (obj1, obj2) => {
  if ((JSON.stringify(obj1)) === (JSON.stringify(obj2))) {
    return true;
  } else {
    return false;
  };
};
