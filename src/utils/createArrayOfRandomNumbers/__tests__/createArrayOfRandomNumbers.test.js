import { createArrayOfRandomNumbers } from "../createArrayOfRandomNumbers";

beforeEach(() => {
  jest.spyOn(global.Math, 'random')
  .mockReturnValueOnce(0.000)
  .mockReturnValueOnce(0.500)
  .mockReturnValueOnce(0.999)
  ;
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});

describe("Testing the type of function createArrayOfRandomNumbers", () => {
  test("The type of function createArrayOfRandomNumbers is a function", () => {
    expect(typeof createArrayOfRandomNumbers).toBe("function");
  });
});

describe("Testing the return type of function createArrayOfRandomNumbers", () => {
  test("The return type of function createArrayOfRandomNumbers is an object if the function is called without any arguments", () => {
    expect(typeof createArrayOfRandomNumbers()).toBe("object");
  });
  
  test("The return type of function createArrayOfRandomNumbers is an object if the function is called with arguments and the first argument isn't a number", () => {
    expect(typeof createArrayOfRandomNumbers("3", 0, 10)).toBe("object");
  });

  test("The return type of function createArrayOfRandomNumbers is an object if the function is called with arguments and the second argument isn't a number", () => {
    expect(typeof createArrayOfRandomNumbers(3, "0", 10)).toBe("object");
  });

  test("The return type of function createArrayOfRandomNumbers is an object if the function is called with arguments and the third argument isn't a number", () => {
    expect(typeof createArrayOfRandomNumbers(3, 0, "10")).toBe("object");
  });

  test("The return type of function createArrayOfRandomNumbers is an object if the function is called with arguments and all the arguments are a number and argument length is less than 0", () => {
    expect(typeof createArrayOfRandomNumbers(-2, 0, 10)).toBe("object");
  });

  test("The return type of function createArrayOfRandomNumbers is an object if the function is called with arguments and all the arguments are a number and argument length is 0", () => {
    expect(typeof createArrayOfRandomNumbers(0, 0, 10)).toBe("object");
  });
  
  test("The return type of function createArrayOfRandomNumbers is an object if the function is called with arguments and all the arguments are a number, argument length is bigger than 0 and argument min is bigger than argument max", () => {
    expect(typeof createArrayOfRandomNumbers(3, 10, 0)).toBe("object");
  });

  test("The return type of function createArrayOfRandomNumbers is an array if the function is called with arguments and all the arguments are a number, argument length is bigger than 0, argument min is equal to argument max and argument min and argument max are smaller than 0", () => {
    expect(Array.isArray(createArrayOfRandomNumbers(3, -10, -10))).toBe(true);
  });

  test("The return type of function createArrayOfRandomNumbers is an array if the function is called with arguments and all the arguments are a number, argument length is bigger than 0, argument min is equal to argument max and argument min and argument max are 0", () => {
    expect(Array.isArray(createArrayOfRandomNumbers(3, 0, 0))).toBe(true);
  });

  test("The return type of function createArrayOfRandomNumbers is an array if the function is called with arguments and all the arguments are a number, argument length is bigger than 0, argument min is equal to argument max and argument min and argument max are bigger than 0", () => {
    expect(Array.isArray(createArrayOfRandomNumbers(3, 10, 10))).toBe(true);
  });

  test("The return type of function createArrayOfRandomNumbers is an array if the function is called with arguments and all the arguments are a number, argument length is bigger than 0, argument min is smaller than argument max, argument min is smaller than 0 and argument max is smaller than 0", () => {
    expect(Array.isArray(createArrayOfRandomNumbers(3, -10, -2))).toBe(true);
  });

  test("The return type of function createArrayOfRandomNumbers is an array if the function is called with arguments and all the arguments are a number, argument length is bigger than 0, argument min is smaller than argument max, argument min is smaller than 0 and argument max is equal to 0", () => {
    expect(Array.isArray(createArrayOfRandomNumbers(3, -10, 0))).toBe(true);
  });

  test("The return type of function createArrayOfRandomNumbers is an array if the function is called with arguments and all the arguments are a number, argument length is bigger than 0, argument min is smaller than argument max, argument min is smaller than 0 and argument max is bigger than 0", () => {
    expect(Array.isArray(createArrayOfRandomNumbers(3, -2, 10))).toBe(true);
  });

  test("The return type of function createArrayOfRandomNumbers is an array if the function is called with arguments and all the arguments are a number, argument length is bigger than 0, argument min is smaller than argument max, argument min is equal to 0 and argument max is bigger than 0", () => {
    expect(Array.isArray(createArrayOfRandomNumbers(3, 0, 10))).toBe(true);
  });

  test("The return type of function createArrayOfRandomNumbers is an array if the function is called with arguments and all the arguments are a number, argument length is bigger than 0, argument min is smaller than argument max, argument min is bigger than 0 and argument max is bigger than 0", () => {
    expect(Array.isArray(createArrayOfRandomNumbers(3, 2, 10))).toBe(true);
  });
});

describe("Testing the return values of function createArrayOfRandomNumbers", () => {
  test("The function createArrayOfRandomNumbers works correctly if the function is called without any arguments", () => {
    expect(createArrayOfRandomNumbers()).toStrictEqual(null);
  });
  
  test("The function createArrayOfRandomNumbers works correctly if the function is called with arguments and the first argument isn't a number", () => {
    expect(createArrayOfRandomNumbers("3", 0, 10)).toStrictEqual(null);
  });

  test("The function createArrayOfRandomNumbers works correctly if the function is called with arguments and the second argument isn't a number", () => {
    expect(createArrayOfRandomNumbers(3, "0", 10)).toStrictEqual(null);
  });

  test("The function createArrayOfRandomNumbers works correctly if the function is called with arguments and the third argument isn't a number", () => {
    expect(createArrayOfRandomNumbers(3, 0, "10")).toStrictEqual(null);
  });

  test("The function createArrayOfRandomNumbers works correctly if the function is called with arguments and all the arguments are a number and argument length is less than 0", () => {
    expect(createArrayOfRandomNumbers(-2, 0, 10)).toStrictEqual(null);
  });

  test("The function createArrayOfRandomNumbers works correctly if the function is called with arguments and all the arguments are a number and argument length is 0", () => {
    expect(createArrayOfRandomNumbers(0, 0, 10)).toStrictEqual(null);
  });
  
  test("The function createArrayOfRandomNumbers works correctly if the function is called with arguments and all the arguments are a number, argument length is bigger than 0 and argument min is bigger than argument max", () => {
    expect(createArrayOfRandomNumbers(3, 10, 0)).toStrictEqual(null);
  });

  test("The function createArrayOfRandomNumbers works correctly if the function is called with arguments and all the arguments are a number, argument length is bigger than 0, argument min is equal to argument max and argument min and argument max are smaller than 0", () => {
    expect(createArrayOfRandomNumbers(3, -10, -10)).toStrictEqual([-10, -10, -10]);
  });

  test("The function createArrayOfRandomNumbers works correctly if the function is called with arguments and all the arguments are a number, argument length is bigger than 0, argument min is equal to argument max and argument min and argument max are 0", () => {
    expect(createArrayOfRandomNumbers(3, 0, 0)).toStrictEqual([0, 0, 0]);
  });

  test("The function createArrayOfRandomNumbers works correctly if the function is called with arguments and all the arguments are a number, argument length is bigger than 0, argument min is equal to argument max and argument min and argument max are bigger than 0", () => {
    expect(createArrayOfRandomNumbers(3, 10, 10)).toStrictEqual([10, 10, 10]);
  });

  test("The function createArrayOfRandomNumbers works correctly if the function is called with arguments and all the arguments are a number, argument length is bigger than 0, argument min is smaller than argument max, argument min is smaller than 0 and argument max is smaller than 0", () => {
    expect(createArrayOfRandomNumbers(3, -10, -2)).toStrictEqual([-10, -6, -2]);
  });

  test("The function createArrayOfRandomNumbers works correctly if the function is called with arguments and all the arguments are a number, argument length is bigger than 0, argument min is smaller than argument max, argument min is smaller than 0 and argument max is equal to 0", () => {
    expect(createArrayOfRandomNumbers(3, -10, 0)).toStrictEqual([-10, -5, 0]);
  });

  test("The function createArrayOfRandomNumbers works correctly if the function is called with arguments and all the arguments are a number, argument length is bigger than 0, argument min is smaller than argument max, argument min is smaller than 0 and argument max is bigger than 0", () => {
    expect(createArrayOfRandomNumbers(3, -2, 10)).toStrictEqual([-2, 4, 10]);
  });

  test("The function createArrayOfRandomNumbers works correctly if the function is called with arguments and all the arguments are a number, argument length is bigger than 0, argument min is smaller than argument max, argument min is equal to 0 and argument max is bigger than 0", () => {
    expect(createArrayOfRandomNumbers(3, 0, 10)).toStrictEqual([0, 5, 10]);
  });

  test("The function createArrayOfRandomNumbers works correctly if the function is called with arguments and all the arguments are a number, argument length is bigger than 0, argument min is smaller than argument max, argument min is bigger than 0 and argument max is bigger than 0", () => {
    expect(createArrayOfRandomNumbers(3, 2, 10)).toStrictEqual([2, 6, 10]);
  });
});
