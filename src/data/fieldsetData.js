import { cloneObject } from "../utils/cloneObject/cloneObject.js";
import { createBinarySearchTree } from "../utils/createBinarySearchTree/createBinarySearchTree.js";
import { getArrayFromString } from "../utils/getArrayFromString/getArrayFromString.js";
import { getArrayWithStringNumbersConvertedToNumbersFromArray } from "../utils/getArrayWithStringNumbersConvertedToNumbersFromArray/getArrayWithStringNumbersConvertedToNumbersFromArray.js";
import { getArrayWithStringNumbersConvertedToNumbersFromString } from "../utils/getArrayWithStringNumbersConvertedToNumbersFromString/getArrayWithStringNumbersConvertedToNumbersFromString.js";
import { getDepthOfValue } from "../utils/getDepthOfValue/getDepthOfValue.js";
import { getHeightOfValue } from "../utils/getHeightOfValue/getHeightOfValue.js";

export const fieldsetData = () => {
  return ({
    fieldsets: {
      ids: ["fieldset1", "fieldset2", "fieldset3"],
      entities: {
        "fieldset1": { 
          id: "fieldset1", 
          buttonText: "Create BST", 
          fieldsetMessageEmptyInputErrorValue: "Please enter the initial value(s)",
          fieldsetMessageEmptyInputSuccessValue: <>&nbsp;</>,
          fieldsetMessageInputFormatErrorValue: "Please enter the initial number(s) in the correct format",
          fieldsetMessageInputValueErrorValue: "Please enter the initial number(s) in the correct format",
          fieldsetMessageReadyToUpdateValue: "The BST is ready to be updated",
          fieldsetMessageUpdatedSuccessValueMessage: (input) => `The BST has been updated`,
          fieldsetMessageUpdatedSuccessValueWithIcon: true,
          inputName: "Initial-value(s)",
          inputRegex: "^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$",
          // implement isValidInputValue later
          isValidInputValue: (input) => true,
          labelText: "Add initial value(s) seperated by a comma and a space",
          // implement onClickHandlerSuccessful later
          onClickHandlerSuccessful: (input, binarySearchTreeState, setBinarySearchTreeState) => {
            createBinarySearchTree(
              input, 
              binarySearchTreeState, 
              setBinarySearchTreeState, 
              cloneObject,
              getArrayWithStringNumbersConvertedToNumbersFromString, 
              ", ", 
              getArrayFromString, 
              getArrayWithStringNumbersConvertedToNumbersFromArray
            );
          }
        },
        "fieldset2": {
          id: "fieldset2", 
          buttonText: "Add value(s)", 
          fieldsetMessageEmptyInputErrorValue: "Please enter the additional value(s)",
          fieldsetMessageEmptyInputSuccessValue: <>&nbsp;</>,
          fieldsetMessageInputFormatErrorValue: "Please enter the additional value(s) in the correct format",
          fieldsetMessageInputValueErrorValue: "Please only enter value(s) that don't already exist in the BST",
          fieldsetMessageReadyToUpdateValue: "The BST is ready to be updated",
          fieldsetMessageUpdatedSuccessValueMessage: (input) => `The BST has been updated`,
          fieldsetMessageUpdatedSuccessValueWithIcon: true,
          inputName: "Add-value(s)",
          inputRegex: "^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$",
          // implement isValidInputValue later
          isValidInputValue: (input) => true,
          labelText: "Add additional value(s) seperated by a comma and a space",
          // implement onClickHandlerSuccessful later
          onClickHandlerSuccessful: (input) => true
        },
        "fieldset3": {
          id: "fieldset3", 
          buttonText: "Remove value(s)", 
          fieldsetMessageEmptyInputErrorValue: "Please enter the value(s) to be removed",
          fieldsetMessageEmptyInputSuccessValue: <>&nbsp;</>,
          fieldsetMessageInputFormatErrorValue: "Please enter the value(s) to be removed in the correct format",
          fieldsetMessageInputValueErrorValue: "Please only enter value(s) that already exist in the BST",
          fieldsetMessageReadyToUpdateValue: "The BST is ready to be updated",
          fieldsetMessageUpdatedSuccessValueMessage: (input) => `The BST has been updated`,
          fieldsetMessageUpdatedSuccessValueWithIcon: true,
          inputName: "Remove-value(s)",
          inputRegex: "^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$",
          // implement isValidInputValue later
          isValidInputValue: (input) => true,
          labelText: "Remove value(s) seperated by a comma and a space",
          // implement onClickHandlerSuccessful later
          onClickHandlerSuccessful: (input) => true
        },
        "fieldset4": {
          id: "fieldset4", 
          buttonText: "Find height", 
          fieldsetMessageEmptyInputErrorValue: "Please enter a value",
          fieldsetMessageEmptyInputSuccessValue: <>&nbsp;</>,
          fieldsetMessageInputFormatErrorValue: "Please enter the value in the correct format",
          fieldsetMessageInputValueErrorValue: "Please only enter a value that exists in the BST",
          fieldsetMessageReadyToUpdateValue: "Ready to find the height",
          fieldsetMessageUpdatedSuccessValueMessage: (input) => `Height of value ${input} is: ${getHeightOfValue(input)}`,
          fieldsetMessageUpdatedSuccessValueWithIcon: true,
          inputName: "Height-value",
          inputRegex: "^(-?\\d+(\\.\\d+)?)$",
          // implement isValidInputValue later
          isValidInputValue: (input) => true,
          labelText: "Find the height of a value in the BST",
          // implement onClickHandlerSuccessful later
          onClickHandlerSuccessful: (input) => true
        },
        "fieldset5": {
          id: "fieldset5", 
          buttonText: "Find depth", 
          fieldsetMessageEmptyInputErrorValue: "Please enter a value",
          fieldsetMessageEmptyInputSuccessValue: <>&nbsp;</>,
          fieldsetMessageInputFormatErrorValue: "Please enter the value in the correct format",
          fieldsetMessageInputValueErrorValue: "Please only enter a value that exists in the BST",
          fieldsetMessageReadyToUpdateValue: "Ready to find the depth",
          fieldsetMessageUpdatedSuccessValueMessage: (input) => `Depth of value ${input} is: ${getDepthOfValue(input)}`,
          fieldsetMessageUpdatedSuccessValueWithIcon: true,
          inputName: "Depth-value",
          inputRegex: "^(-?\\d+(\\.\\d+)?)$",
          // implement isValidInputValue later
          isValidInputValue: (input) => true,
          labelText: "Find the depth of a value in the BST",
          // implement onClickHandlerSuccessful later
          onClickHandlerSuccessful: (input) => true
        }
      }
    }
  });
};
