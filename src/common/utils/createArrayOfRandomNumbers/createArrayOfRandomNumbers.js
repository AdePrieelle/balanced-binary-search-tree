export const createArrayOfRandomNumbers = (length, min, max) => {
  if (
       (!([length, min, max].every(argument => (typeof argument === "number")))) 
    || (length <= 0) 
    || (min > max)
  ) {
    return null;
  };

  const arrayOfRandomNumbers = [...Array(length)].map(_=> ((Math.floor(Math.random()*((max - min) + 1))) + min));

  return arrayOfRandomNumbers;
};
