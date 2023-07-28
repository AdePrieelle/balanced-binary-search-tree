import { cloneDeep } from 'lodash';

export const cloneObject = (obj) => {
  if (typeof(obj) !== "object") {
    return null;
  };

  const clonedObject = cloneDeep(obj);

  return (clonedObject);
};
