import { isEqual } from 'lodash';

export const getAreObjectValuesEqual = (obj1, obj2) => {
  if (isEqual(obj1, obj2)) {
    return true;
  } else {
    return false;
  };
};
