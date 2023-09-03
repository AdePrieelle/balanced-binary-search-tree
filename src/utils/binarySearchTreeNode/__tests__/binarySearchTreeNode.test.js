import { BinarySearchTreeNode } from "../binarySearchTreeNode.js";

describe("Testing the factory function BinarySearchTreeNode", () => {
  describe("Testing the type of factory function BinarySearchTreeNode", () => {
    test("The type of factory function BinarySearchTreeNode is a function", () => {
      expect(typeof BinarySearchTreeNode).toBe("function");
    });
  });

  describe("Testing the return type of factory function BinarySearchTreeNode", () => {
    test("The return type of factory function BinarySearchTreeNode, without an argument, is an object", () => {
      expect(typeof BinarySearchTreeNode()).toBe("object");
    });
  
    test("The return type of factory function BinarySearchTreeNode, with an argument, is an object", () => {
      expect(typeof BinarySearchTreeNode("data1")).toBe("object");
    });
  });

  describe("Testing the return value of factory function BinarySearchTreeNode", () => {
    test("Factory function BinarySearchTreeNode works correctly if it is called without an argument", () => {
      expect(BinarySearchTreeNode()).toStrictEqual(
        {
          data: null,
          left: null,
          right: null
        }
      );
    });

    test("Factory function BinarySearchTreeNode works correctly if it is called with an argument for the first parameter, without an argument for the second parameter, without an argument for the third parameter", () => {
      expect(BinarySearchTreeNode("data1")).toStrictEqual(
        {
          data: "data1",
          left: null,
          right: null
        }
      );
    });

    test("Factory function BinarySearchTreeNode works correctly if it is called with an argument for the first parameter, with an argument for the second parameter, without an argument for the third parameter", () => {
      expect(BinarySearchTreeNode("data1", { data: "data2", left: null, right: null })).toStrictEqual(
        {
          data: "data1",
          left: { data: "data2", left: null, right: null },
          right: null
        }
      );
    });

    test("Factory function BinarySearchTreeNode works correctly if it is called with an argument for the first parameter, with an argument for the second parameter, with an argument for the third parameter", () => {
      expect(BinarySearchTreeNode("data1", { data: "data2", left: null, right: null }, { data: "data3", left: null, right: null })).toStrictEqual(
        {
          data: "data1",
          left: { data: "data2", left: null, right: null },
          right: { data: "data3", left: null, right: null }
        }
      );
    });
  });
});
