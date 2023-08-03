import { getRebalanceBSTMessage } from "../getRebalanceBSTMessage.js";

describe("Testing the function getRebalanceBSTMessage", () => {
  describe("Testing the type of function getRebalanceBSTMessage", () => {
    test("The type of function getRebalanceBSTMessage is correct", () => {
      expect(typeof getRebalanceBSTMessage).toBe("function");
    });
  });

  describe("Testing the return values of function getRebalanceBSTMessage", () => {
    test("The return value of function getRebalanceBSTMessage is correct if the function is called without an argument", () => {
      expect(getRebalanceBSTMessage()).toStrictEqual(<>&nbsp;</>);
    });

    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the wrong type", () => {
      expect(getRebalanceBSTMessage(1, 2, 3, 4, 5, 6, 7)).toStrictEqual(<>&nbsp;</>);
    });
    
    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type string, 5th of type object, 6th of type string, 7th of type string", () => {
      const mockIsBSTBalanced = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsRebalancedBSTEqualToBSTBeforeRebalancing = jest.fn(() => (false));
      const mockRebalanceBSTMessageAlreadyBalancedBSTValue = jest.fn(() => ("The BST is already balanced"));
      const mockRebalanceBSTMessageEmptyValue = jest.fn(() => (""));
      const mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = jest.fn(() => ("The already balanced BST has been rebalanced"));
      const mockRebalanceBSTMessageUpdatedRebalancedValue = jest.fn(() => ("The BST has been rebalanced"));
      expect(getRebalanceBSTMessage(
        mockIsBSTBalanced(), 
        mockIsLastUpdatedFieldset(), 
        mockIsRebalancedBSTEqualToBSTBeforeRebalancing(),
        mockRebalanceBSTMessageAlreadyBalancedBSTValue(),
        mockRebalanceBSTMessageEmptyValue(),
        mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue(),
        mockRebalanceBSTMessageUpdatedRebalancedValue()
      )).toStrictEqual(mockRebalanceBSTMessageEmptyValue());
    });

    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type string, 5th of type object, 6th of type string, 7th of type string", () => {
      const mockIsBSTBalanced = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsRebalancedBSTEqualToBSTBeforeRebalancing = jest.fn(() => (false));
      const mockRebalanceBSTMessageAlreadyBalancedBSTValue = jest.fn(() => ("The BST is already balanced"));
      const mockRebalanceBSTMessageEmptyValue = jest.fn(() => (""));
      const mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = jest.fn(() => ("The already balanced BST has been rebalanced"));
      const mockRebalanceBSTMessageUpdatedRebalancedValue = jest.fn(() => ("The BST has been rebalanced"));
      expect(getRebalanceBSTMessage(
        mockIsBSTBalanced(), 
        mockIsLastUpdatedFieldset(), 
        mockIsRebalancedBSTEqualToBSTBeforeRebalancing(),
        mockRebalanceBSTMessageAlreadyBalancedBSTValue(),
        mockRebalanceBSTMessageEmptyValue(),
        mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue(),
        mockRebalanceBSTMessageUpdatedRebalancedValue()
      )).toStrictEqual(mockRebalanceBSTMessageEmptyValue());
    });

    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type string, 5th of type object, 6th of type string, 7th of type string", () => {
      const mockIsBSTBalanced = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsRebalancedBSTEqualToBSTBeforeRebalancing = jest.fn(() => (false));
      const mockRebalanceBSTMessageAlreadyBalancedBSTValue = jest.fn(() => ("The BST is already balanced"));
      const mockRebalanceBSTMessageEmptyValue = jest.fn(() => (""));
      const mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = jest.fn(() => ("The already balanced BST has been rebalanced"));
      const mockRebalanceBSTMessageUpdatedRebalancedValue = jest.fn(() => ("The BST has been rebalanced"));
      expect(getRebalanceBSTMessage(
        mockIsBSTBalanced(), 
        mockIsLastUpdatedFieldset(), 
        mockIsRebalancedBSTEqualToBSTBeforeRebalancing(),
        mockRebalanceBSTMessageAlreadyBalancedBSTValue(),
        mockRebalanceBSTMessageEmptyValue(),
        mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue(),
        mockRebalanceBSTMessageUpdatedRebalancedValue()
      )).toStrictEqual(mockRebalanceBSTMessageUpdatedRebalancedValue());
    });

    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type string, 5th of type object, 6th of type string, 7th of type string", () => {
      const mockIsBSTBalanced = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsRebalancedBSTEqualToBSTBeforeRebalancing = jest.fn(() => (false));
      const mockRebalanceBSTMessageAlreadyBalancedBSTValue = jest.fn(() => ("The BST is already balanced"));
      const mockRebalanceBSTMessageEmptyValue = jest.fn(() => (""));
      const mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = jest.fn(() => ("The already balanced BST has been rebalanced"));
      const mockRebalanceBSTMessageUpdatedRebalancedValue = jest.fn(() => ("The BST has been rebalanced"));
      expect(getRebalanceBSTMessage(
        mockIsBSTBalanced(), 
        mockIsLastUpdatedFieldset(), 
        mockIsRebalancedBSTEqualToBSTBeforeRebalancing(),
        mockRebalanceBSTMessageAlreadyBalancedBSTValue(),
        mockRebalanceBSTMessageEmptyValue(),
        mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue(),
        mockRebalanceBSTMessageUpdatedRebalancedValue()
      )).toStrictEqual(mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue());
    });

    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type string, 5th of type object, 6th of type string, 7th of type string", () => {
      const mockIsBSTBalanced = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsRebalancedBSTEqualToBSTBeforeRebalancing = jest.fn(() => (true));
      const mockRebalanceBSTMessageAlreadyBalancedBSTValue = jest.fn(() => ("The BST is already balanced"));
      const mockRebalanceBSTMessageEmptyValue = jest.fn(() => (""));
      const mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = jest.fn(() => ("The already balanced BST has been rebalanced"));
      const mockRebalanceBSTMessageUpdatedRebalancedValue = jest.fn(() => ("The BST has been rebalanced"));
      expect(getRebalanceBSTMessage(
        mockIsBSTBalanced(), 
        mockIsLastUpdatedFieldset(), 
        mockIsRebalancedBSTEqualToBSTBeforeRebalancing(),
        mockRebalanceBSTMessageAlreadyBalancedBSTValue(),
        mockRebalanceBSTMessageEmptyValue(),
        mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue(),
        mockRebalanceBSTMessageUpdatedRebalancedValue()
      )).toStrictEqual(mockRebalanceBSTMessageEmptyValue());
    });

    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type string, 5th of type object, 6th of type string, 7th of type string", () => {
      const mockIsBSTBalanced = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsRebalancedBSTEqualToBSTBeforeRebalancing = jest.fn(() => (true));
      const mockRebalanceBSTMessageAlreadyBalancedBSTValue = jest.fn(() => ("The BST is already balanced"));
      const mockRebalanceBSTMessageEmptyValue = jest.fn(() => (""));
      const mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = jest.fn(() => ("The already balanced BST has been rebalanced"));
      const mockRebalanceBSTMessageUpdatedRebalancedValue = jest.fn(() => ("The BST has been rebalanced"));
      expect(getRebalanceBSTMessage(
        mockIsBSTBalanced(), 
        mockIsLastUpdatedFieldset(), 
        mockIsRebalancedBSTEqualToBSTBeforeRebalancing(),
        mockRebalanceBSTMessageAlreadyBalancedBSTValue(),
        mockRebalanceBSTMessageEmptyValue(),
        mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue(),
        mockRebalanceBSTMessageUpdatedRebalancedValue()
      )).toStrictEqual(mockRebalanceBSTMessageEmptyValue());
    });

    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type string, 5th of type object, 6th of type string, 7th of type string", () => {
      const mockIsBSTBalanced = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsRebalancedBSTEqualToBSTBeforeRebalancing = jest.fn(() => (true));
      const mockRebalanceBSTMessageAlreadyBalancedBSTValue = jest.fn(() => ("The BST is already balanced"));
      const mockRebalanceBSTMessageEmptyValue = jest.fn(() => (""));
      const mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = jest.fn(() => ("The already balanced BST has been rebalanced"));
      const mockRebalanceBSTMessageUpdatedRebalancedValue = jest.fn(() => ("The BST has been rebalanced"));
      expect(getRebalanceBSTMessage(
        mockIsBSTBalanced(), 
        mockIsLastUpdatedFieldset(), 
        mockIsRebalancedBSTEqualToBSTBeforeRebalancing(),
        mockRebalanceBSTMessageAlreadyBalancedBSTValue(),
        mockRebalanceBSTMessageEmptyValue(),
        mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue(),
        mockRebalanceBSTMessageUpdatedRebalancedValue()
      )).toStrictEqual(mockRebalanceBSTMessageUpdatedRebalancedValue());
    });

    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type string, 5th of type object, 6th of type string, 7th of type string", () => {
      const mockIsBSTBalanced = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsRebalancedBSTEqualToBSTBeforeRebalancing = jest.fn(() => (true));
      const mockRebalanceBSTMessageAlreadyBalancedBSTValue = jest.fn(() => ("The BST is already balanced"));
      const mockRebalanceBSTMessageEmptyValue = jest.fn(() => (""));
      const mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = jest.fn(() => ("The already balanced BST has been rebalanced"));
      const mockRebalanceBSTMessageUpdatedRebalancedValue = jest.fn(() => ("The BST has been rebalanced"));
      expect(getRebalanceBSTMessage(
        mockIsBSTBalanced(), 
        mockIsLastUpdatedFieldset(), 
        mockIsRebalancedBSTEqualToBSTBeforeRebalancing(),
        mockRebalanceBSTMessageAlreadyBalancedBSTValue(),
        mockRebalanceBSTMessageEmptyValue(),
        mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue(),
        mockRebalanceBSTMessageUpdatedRebalancedValue()
      )).toStrictEqual(mockRebalanceBSTMessageAlreadyBalancedBSTValue());
    });

    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type object, 5th of type object, 6th of type object, 7th of type object", () => {
      const mockIsBSTBalanced = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsRebalancedBSTEqualToBSTBeforeRebalancing = jest.fn(() => (false));
      const mockRebalanceBSTMessageAlreadyBalancedBSTValue = jest.fn(() => (<>The BST is already balanced</>));
      const mockRebalanceBSTMessageEmptyValue = jest.fn(() => (<>&nbsp;</>));
      const mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = jest.fn(() => (<>The already balanced BST has been rebalanced</>));
      const mockRebalanceBSTMessageUpdatedRebalancedValue = jest.fn(() => (<>The BST has been rebalanced</>));
      expect(getRebalanceBSTMessage(
        mockIsBSTBalanced(), 
        mockIsLastUpdatedFieldset(), 
        mockIsRebalancedBSTEqualToBSTBeforeRebalancing(),
        mockRebalanceBSTMessageAlreadyBalancedBSTValue(),
        mockRebalanceBSTMessageEmptyValue(),
        mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue(),
        mockRebalanceBSTMessageUpdatedRebalancedValue()
      )).toStrictEqual(mockRebalanceBSTMessageEmptyValue());
    });

    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type object, 5th of type object, 6th of type object, 7th of type object", () => {
      const mockIsBSTBalanced = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsRebalancedBSTEqualToBSTBeforeRebalancing = jest.fn(() => (false));
      const mockRebalanceBSTMessageAlreadyBalancedBSTValue = jest.fn(() => (<>The BST is already balanced</>));
      const mockRebalanceBSTMessageEmptyValue = jest.fn(() => (<>&nbsp;</>));
      const mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = jest.fn(() => (<>The already balanced BST has been rebalanced</>));
      const mockRebalanceBSTMessageUpdatedRebalancedValue = jest.fn(() => (<>The BST has been rebalanced</>));
      expect(getRebalanceBSTMessage(
        mockIsBSTBalanced(), 
        mockIsLastUpdatedFieldset(), 
        mockIsRebalancedBSTEqualToBSTBeforeRebalancing(),
        mockRebalanceBSTMessageAlreadyBalancedBSTValue(),
        mockRebalanceBSTMessageEmptyValue(),
        mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue(),
        mockRebalanceBSTMessageUpdatedRebalancedValue()
      )).toStrictEqual(mockRebalanceBSTMessageEmptyValue());
    });

    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type object, 5th of type object, 6th of type object, 7th of type object", () => {
      const mockIsBSTBalanced = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsRebalancedBSTEqualToBSTBeforeRebalancing = jest.fn(() => (false));
      const mockRebalanceBSTMessageAlreadyBalancedBSTValue = jest.fn(() => (<>The BST is already balanced</>));
      const mockRebalanceBSTMessageEmptyValue = jest.fn(() => (<>&nbsp;</>));
      const mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = jest.fn(() => (<>The already balanced BST has been rebalanced</>));
      const mockRebalanceBSTMessageUpdatedRebalancedValue = jest.fn(() => (<>The BST has been rebalanced</>));
      expect(getRebalanceBSTMessage(
        mockIsBSTBalanced(), 
        mockIsLastUpdatedFieldset(), 
        mockIsRebalancedBSTEqualToBSTBeforeRebalancing(),
        mockRebalanceBSTMessageAlreadyBalancedBSTValue(),
        mockRebalanceBSTMessageEmptyValue(),
        mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue(),
        mockRebalanceBSTMessageUpdatedRebalancedValue()
      )).toStrictEqual(mockRebalanceBSTMessageUpdatedRebalancedValue());
    });

    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type object, 5th of type object, 6th of type object, 7th of type object", () => {
      const mockIsBSTBalanced = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsRebalancedBSTEqualToBSTBeforeRebalancing = jest.fn(() => (false));
      const mockRebalanceBSTMessageAlreadyBalancedBSTValue = jest.fn(() => (<>The BST is already balanced</>));
      const mockRebalanceBSTMessageEmptyValue = jest.fn(() => (<>&nbsp;</>));
      const mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = jest.fn(() => (<>The already balanced BST has been rebalanced</>));
      const mockRebalanceBSTMessageUpdatedRebalancedValue = jest.fn(() => (<>The BST has been rebalanced</>));
      expect(getRebalanceBSTMessage(
        mockIsBSTBalanced(), 
        mockIsLastUpdatedFieldset(), 
        mockIsRebalancedBSTEqualToBSTBeforeRebalancing(),
        mockRebalanceBSTMessageAlreadyBalancedBSTValue(),
        mockRebalanceBSTMessageEmptyValue(),
        mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue(),
        mockRebalanceBSTMessageUpdatedRebalancedValue()
      )).toStrictEqual(mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue());
    });

    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type object, 5th of type object, 6th of type object, 7th of type object", () => {
      const mockIsBSTBalanced = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsRebalancedBSTEqualToBSTBeforeRebalancing = jest.fn(() => (true));
      const mockRebalanceBSTMessageAlreadyBalancedBSTValue = jest.fn(() => (<>The BST is already balanced</>));
      const mockRebalanceBSTMessageEmptyValue = jest.fn(() => (<>&nbsp;</>));
      const mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = jest.fn(() => (<>The already balanced BST has been rebalanced</>));
      const mockRebalanceBSTMessageUpdatedRebalancedValue = jest.fn(() => (<>The BST has been rebalanced</>));
      expect(getRebalanceBSTMessage(
        mockIsBSTBalanced(), 
        mockIsLastUpdatedFieldset(), 
        mockIsRebalancedBSTEqualToBSTBeforeRebalancing(),
        mockRebalanceBSTMessageAlreadyBalancedBSTValue(),
        mockRebalanceBSTMessageEmptyValue(),
        mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue(),
        mockRebalanceBSTMessageUpdatedRebalancedValue()
      )).toStrictEqual(mockRebalanceBSTMessageEmptyValue());
    });

    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type object, 5th of type object, 6th of type object, 7th of type object", () => {
      const mockIsBSTBalanced = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsRebalancedBSTEqualToBSTBeforeRebalancing = jest.fn(() => (true));
      const mockRebalanceBSTMessageAlreadyBalancedBSTValue = jest.fn(() => (<>The BST is already balanced</>));
      const mockRebalanceBSTMessageEmptyValue = jest.fn(() => (<>&nbsp;</>));
      const mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = jest.fn(() => (<>The already balanced BST has been rebalanced</>));
      const mockRebalanceBSTMessageUpdatedRebalancedValue = jest.fn(() => (<>The BST has been rebalanced</>));
      expect(getRebalanceBSTMessage(
        mockIsBSTBalanced(), 
        mockIsLastUpdatedFieldset(), 
        mockIsRebalancedBSTEqualToBSTBeforeRebalancing(),
        mockRebalanceBSTMessageAlreadyBalancedBSTValue(),
        mockRebalanceBSTMessageEmptyValue(),
        mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue(),
        mockRebalanceBSTMessageUpdatedRebalancedValue()
      )).toStrictEqual(mockRebalanceBSTMessageEmptyValue());
    });

    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type object, 5th of type object, 6th of type object, 7th of type object", () => {
      const mockIsBSTBalanced = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsRebalancedBSTEqualToBSTBeforeRebalancing = jest.fn(() => (true));
      const mockRebalanceBSTMessageAlreadyBalancedBSTValue = jest.fn(() => (<>The BST is already balanced</>));
      const mockRebalanceBSTMessageEmptyValue = jest.fn(() => (<>&nbsp;</>));
      const mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = jest.fn(() => (<>The already balanced BST has been rebalanced</>));
      const mockRebalanceBSTMessageUpdatedRebalancedValue = jest.fn(() => (<>The BST has been rebalanced</>));
      expect(getRebalanceBSTMessage(
        mockIsBSTBalanced(), 
        mockIsLastUpdatedFieldset(), 
        mockIsRebalancedBSTEqualToBSTBeforeRebalancing(),
        mockRebalanceBSTMessageAlreadyBalancedBSTValue(),
        mockRebalanceBSTMessageEmptyValue(),
        mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue(),
        mockRebalanceBSTMessageUpdatedRebalancedValue()
      )).toStrictEqual(mockRebalanceBSTMessageUpdatedRebalancedValue());
    });

    test("The return value of function getRebalanceBSTMessage is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type object, 5th of type object, 6th of type object, 7th of type object", () => {
      const mockIsBSTBalanced = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsRebalancedBSTEqualToBSTBeforeRebalancing = jest.fn(() => (true));
      const mockRebalanceBSTMessageAlreadyBalancedBSTValue = jest.fn(() => (<>The BST is already balanced</>));
      const mockRebalanceBSTMessageEmptyValue = jest.fn(() => (<>&nbsp;</>));
      const mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = jest.fn(() => (<>The already balanced BST has been rebalanced</>));
      const mockRebalanceBSTMessageUpdatedRebalancedValue = jest.fn(() => (<>The BST has been rebalanced</>));
      expect(getRebalanceBSTMessage(
        mockIsBSTBalanced(), 
        mockIsLastUpdatedFieldset(), 
        mockIsRebalancedBSTEqualToBSTBeforeRebalancing(),
        mockRebalanceBSTMessageAlreadyBalancedBSTValue(),
        mockRebalanceBSTMessageEmptyValue(),
        mockRebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue(),
        mockRebalanceBSTMessageUpdatedRebalancedValue()
      )).toStrictEqual(mockRebalanceBSTMessageAlreadyBalancedBSTValue());
    });
  });
});
