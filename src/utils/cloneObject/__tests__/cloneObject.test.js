import { cloneObject } from "../cloneObject.js";

describe("Testing the function cloneObject", () => {
  describe("Testing the type of function cloneObject", () => {
    test("The type of function cloneObject is a function", () => {
      expect(typeof cloneObject).toBe("function");
    });
  });

  describe("Testing the return type of function cloneObject", () => {
    test("The return type of function cloneObject is an object if the method is called without an argument", () => {
      expect(typeof(cloneObject())).toBe("object");
    });

    test("The return type of function cloneObject is an object if the method is called with an argument that isn't an object", () => {
      expect(typeof(cloneObject(2))).toBe("object");
    });
    
    test("The return type of function cloneObject is an array if the method is called with an argument that is an object", () => {
      expect(typeof(cloneObject({ test1: 1, test2: 2 }))).toBe("object");
    });
  });

  describe("Testing the return values of function cloneObject", () => {
    test("The function cloneObject works correctly if the function is called without an argument", () => {
      expect(cloneObject()).toStrictEqual(null);
    });

    test("Function cloneObject works correctly if the function is called with an argument for the first parameter that isn't an object", () => {
      expect(cloneObject(2)).toStrictEqual(null);
    });

    test("Function cloneObject works correctly if the function is called with an argument for the first parameter that is an object", () => {
      expect(cloneObject({ test1: 1, test2: 2 })).toStrictEqual({ test1: 1, test2: 2 });
    });

    test("Function cloneObject works correctly if the function is called with an argument for the first parameter that is an object and changes in the copied object wont change the original object", () => {
      const obj1 = { test1: 1, test2: 2 };
      const obj2 = cloneObject(obj1);
      obj2.test2 = 3;
      expect(obj2).toStrictEqual({ test1: 1, test2: 3 });
      expect(obj1).toStrictEqual({ test1: 1, test2: 2 });
    });
  });
});
