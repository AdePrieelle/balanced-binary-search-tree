import { getAreObjectValuesEqual } from "../getAreObjectValuesEqual";

test("Function getAreObjectValuesEqual works correctly if obj1 is undefined and obj2 is undefined", () => {
  const mockObj1 = jest.fn(() => (undefined));
  const mockObj2 = jest.fn(() => (undefined));
  expect(getAreObjectValuesEqual(mockObj1(), mockObj2())).toBe(true);
});

test("Function getAreObjectValuesEqual works correctly if obj1 is null and obj2 is undefined", () => {
  const mockObj1 = jest.fn(() => (null));
  const mockObj2 = jest.fn(() => (undefined));
  expect(getAreObjectValuesEqual(mockObj1(), mockObj2())).toBe(false);
});

test("Function getAreObjectValuesEqual works correctly if obj1 is undefined and obj2 is null", () => {
  const mockObj1 = jest.fn(() => (undefined));
  const mockObj2 = jest.fn(() => (null));
  expect(getAreObjectValuesEqual(mockObj1(), mockObj2())).toBe(false);
});

test("Function getAreObjectValuesEqual works correctly if obj1 is null and obj2 is null", () => {
  const mockObj1 = jest.fn(() => (null));
  const mockObj2 = jest.fn(() => (null));
  expect(getAreObjectValuesEqual(mockObj1(), mockObj2())).toBe(true);
});

test("Function getAreObjectValuesEqual works correctly if obj1 is undefined and obj2 is an object with at least one key-value pair", () => {
  const mockObj1 = jest.fn(() => (undefined));
  const mockObj2 = jest.fn(() => (
    {
      data: 2,
      left: {
        data: -2,
        left: null,
        right: null
      },
      right: {
        data: 6,
        left: null,
        right: null
      }
    }
  ));
  expect(getAreObjectValuesEqual(mockObj1(), mockObj2())).toBe(false);
});

test("Function getAreObjectValuesEqual works correctly if obj1 is null and obj2 is an object with at least one key-value pair", () => {
  const mockObj1 = jest.fn(() => (null));
  const mockObj2 = jest.fn(() => (
    {
      data: 2,
      left: {
        data: -2,
        left: null,
        right: null
      },
      right: {
        data: 6,
        left: null,
        right: null
      }
    }
  ));
  expect(getAreObjectValuesEqual(mockObj1(), mockObj2())).toBe(false);
});

test("Function getAreObjectValuesEqual works correctly if obj1 is an object with at least one key-value pair and obj2 is undefined", () => {
  const mockObj1 = jest.fn(() => (
    {
      data: 2,
      left: {
        data: -2,
        left: null,
        right: null
      },
      right: {
        data: 6,
        left: null,
        right: null
      }
    }
  ));
  const mockObj2 = jest.fn(() => (undefined));
  expect(getAreObjectValuesEqual(mockObj1(), mockObj2())).toBe(false);
});

test("Function getAreObjectValuesEqual works correctly if obj1 is an object with at least one key-value pair and obj2 is null", () => {
  const mockObj1 = jest.fn(() => (
    {
      data: 2,
      left: {
        data: -2,
        left: null,
        right: null
      },
      right: {
        data: 6,
        left: null,
        right: null
      }
    }
  ));
  const mockObj2 = jest.fn(() => (null));
  expect(getAreObjectValuesEqual(mockObj1(), mockObj2())).toBe(false);
});

test("Function getAreObjectValuesEqual works correctly if obj1 is an object with at least one key-value pair, obj2 is an object with at least one key-value pair and obj1 and obj2 key-value pairs are not equal", () => {
  const mockObj1 = jest.fn(() => (
    {
      data: 2,
      left: {
        data: -2,
        left: null,
        right: null
      },
      right: {
        data: 6,
        left: null,
        right: null
      }
    }
  ));
  const mockObj2 = jest.fn(() => (
    {
      data: 2,
      left: {
        data: -2,
        left: null,
        right: null
      },
      right: {
        data: 7,
        left: null,
        right: null
      }
    }
  ));
  expect(getAreObjectValuesEqual(mockObj1(), mockObj2())).toBe(false);
});

test("Function getAreObjectValuesEqual works correctly if obj1 is an object with at least one key-value pair, obj2 is an object with at least one key-value pair and obj1 and obj2 key-value pairs are equal", () => {
  const mockObj1 = jest.fn(() => (
    {
      data: 2,
      left: {
        data: -2,
        left: null,
        right: null
      },
      right: {
        data: 6,
        left: null,
        right: null
      }
    }
  ));
  const mockObj2 = jest.fn(() => (
    {
      data: 2,
      left: {
        data: -2,
        left: null,
        right: null
      },
      right: {
        data: 6,
        left: null,
        right: null
      }
    }
  ));
  expect(getAreObjectValuesEqual(mockObj1(), mockObj2())).toBe(true);
});
