import { cloneObject } from "../utils/cloneObject/cloneObject.js";
import { getArrayFromString } from "../utils/getArrayFromString/getArrayFromString.js";
import { getArrayWithStringNumbersConvertedToNumbersFromArray } from "../utils/getArrayWithStringNumbersConvertedToNumbersFromArray/getArrayWithStringNumbersConvertedToNumbersFromArray.js";
import { getArrayWithStringNumbersConvertedToNumbersFromString } from "../utils/getArrayWithStringNumbersConvertedToNumbersFromString/getArrayWithStringNumbersConvertedToNumbersFromString.js";
import { getBinarySearchTreeWithAddedAdditionalInputValues } from "../utils/getBinarySearchTreeWithAddedAdditionalInputValues/getBinarySearchTreeWithAddedAdditionalInputValues.js";
import { getBinarySearchTreeWithAddedArrayElements } from "../utils/getBinarySearchTreeWithAddedArrayElements/getBinarySearchTreeWithAddedArrayElements.js";
import { getBinarySearchTreeWithAddedInitialInputValues } from "../utils/getBinarySearchTreeWithAddedInitialInputValues/getBinarySearchTreeWithAddedInitialInputValues.js";
import { getBinarySearchTreeWithRemovedArrayElements } from "../utils/getBinarySearchTreeWithRemovedArrayElements/getBinarySearchTreeWithRemovedArrayElements.js";
import { getBinarySearchTreeWithRemovedInputValues } from "../utils/getBinarySearchTreeWithRemovedInputValues/getBinarySearchTreeWithRemovedInputValues.js";
import { getDepthOfValue } from "../utils/getDepthOfValue/getDepthOfValue.js";
import { getHeightOfValue } from "../utils/getHeightOfValue/getHeightOfValue.js";
import { getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree } from "../utils/getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree/getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree.js";
import { getIsArrayOnlyWithValuesThatExistInBinarySearchTree } from "../utils/getIsArrayOnlyWithValuesThatExistInBinarySearchTree/getIsArrayOnlyWithValuesThatExistInBinarySearchTree.js";
import { getIsValidInputValueFindHeight } from "../utils/getIsValidInputValueFindHeight/getIsValidInputValueFindHeight.js";
import { getIsValidInputValueAddAdditionalValues } from "../utils/getIsValidInputValueAddAdditionalValues/getIsValidInputValueAddAdditionalValues.js";
import { getIsValidInputValueRemoveValues } from "../utils/getIsValidInputValueRemoveValues/getIsValidInputValueRemoveValues.js";

export const fieldsetData = () => {
  return ({
    fieldsets: {
      ids: ["fieldset1", "fieldset2", "fieldset3", "fieldset4", "fieldset5"],
      entities: {
        "fieldset1": { 
          id: "fieldset1", 
          buttonText: "Create BST", 
          fieldsetMessageEmptyInputErrorValue: "Please enter the initial value(s)",
          fieldsetMessageEmptyInputSuccessValue: <>&nbsp;</>,
          fieldsetMessageInputFormatErrorValue: "Please enter the initial number(s) in the correct format",
          fieldsetMessageInputValueErrorValue: "Please enter the initial number(s) in the correct format",
          fieldsetMessageReadyToUpdateValue: "The BST is ready to be updated",
          fieldsetMessageUpdatedSuccessValueMessage: (input) => (`The BST has been updated`),
          fieldsetMessageUpdatedSuccessValueWithIcon: true,
          inputName: "Initial-value(s)",
          inputRegex: "^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$",
          // implement isValidInputValue later
          isValidInputValue: (input, binarySearchTree) => { 
            return (true); 
          },
          labelText: "Add initial value(s) seperated by a comma and a space",
          // implement onClickHandlerSuccessful later
          onClickHandlerSuccessful: (input, binarySearchTree, setBinarySearchTree) => {
            setBinarySearchTree(
              getBinarySearchTreeWithAddedInitialInputValues(
                input, 
                binarySearchTree, 
                cloneObject,
                getArrayWithStringNumbersConvertedToNumbersFromString, 
                ", ", 
                getArrayFromString, 
                getArrayWithStringNumbersConvertedToNumbersFromArray
              )
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
          fieldsetMessageUpdatedSuccessValueMessage: (input) => (`The BST has been updated`),
          fieldsetMessageUpdatedSuccessValueWithIcon: true,
          inputName: "Add-value(s)",
          inputRegex: "^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$",
          // implement isValidInputValue later
          // isValidInputValue: (input) => (true),
          isValidInputValue: (input, binarySearchTree) => {
            return (
              getIsValidInputValueAddAdditionalValues(
                input, 
                binarySearchTree,
                cloneObject,
                getArrayWithStringNumbersConvertedToNumbersFromString, 
                ", ", 
                getArrayFromString, 
                getArrayWithStringNumbersConvertedToNumbersFromArray,
                getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree
              )
            );
          },
          labelText: "Add additional value(s) seperated by a comma and a space",
          // implement onClickHandlerSuccessful later
          // onClickHandlerSuccessful: (input) => (true)
          onClickHandlerSuccessful: (input, binarySearchTree, setBinarySearchTree) => {
            setBinarySearchTree(
              getBinarySearchTreeWithAddedAdditionalInputValues(
                input, 
                binarySearchTree, 
                cloneObject,
                getArrayWithStringNumbersConvertedToNumbersFromString, 
                ", ", 
                getArrayFromString, 
                getArrayWithStringNumbersConvertedToNumbersFromArray,
                getBinarySearchTreeWithAddedArrayElements
              )
            );
          }
        },
        "fieldset3": {
          id: "fieldset3", 
          buttonText: "Remove value(s)", 
          fieldsetMessageEmptyInputErrorValue: "Please enter the value(s) to be removed",
          fieldsetMessageEmptyInputSuccessValue: <>&nbsp;</>,
          fieldsetMessageInputFormatErrorValue: "Please enter the value(s) to be removed in the correct format",
          fieldsetMessageInputValueErrorValue: "Please only enter value(s) that already exist in the BST",
          fieldsetMessageReadyToUpdateValue: "The BST is ready to be updated",
          fieldsetMessageUpdatedSuccessValueMessage: (input) => (`The BST has been updated`),
          fieldsetMessageUpdatedSuccessValueWithIcon: true,
          inputName: "Remove-value(s)",
          inputRegex: "^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$",
          // implement isValidInputValue later
          // isValidInputValue: (input) => (true),
          isValidInputValue: (input, binarySearchTree) => {
            return (
              getIsValidInputValueRemoveValues(
                input, 
                binarySearchTree,
                cloneObject,
                getArrayWithStringNumbersConvertedToNumbersFromString, 
                ", ", 
                getArrayFromString, 
                getArrayWithStringNumbersConvertedToNumbersFromArray,
                getIsArrayOnlyWithValuesThatExistInBinarySearchTree
              )
            );
          },
          labelText: "Remove value(s) seperated by a comma and a space",
          // implement onClickHandlerSuccessful later
          // onClickHandlerSuccessful: (input) => (true)
          onClickHandlerSuccessful: (input, binarySearchTree, setBinarySearchTree) => {
            setBinarySearchTree(
              getBinarySearchTreeWithRemovedInputValues(
                input, 
                binarySearchTree, 
                cloneObject,
                getArrayWithStringNumbersConvertedToNumbersFromString, 
                ", ", 
                getArrayFromString, 
                getArrayWithStringNumbersConvertedToNumbersFromArray,
                getBinarySearchTreeWithRemovedArrayElements
              )
            );
          }
        },
        "fieldset4": {
          id: "fieldset4", 
          buttonText: "Find height", 
          fieldsetMessageEmptyInputErrorValue: "Please enter a value",
          fieldsetMessageEmptyInputSuccessValue: <>&nbsp;</>,
          fieldsetMessageInputFormatErrorValue: "Please enter the value in the correct format",
          fieldsetMessageInputValueErrorValue: "Please only enter a value that exists in the BST",
          fieldsetMessageReadyToUpdateValue: "Ready to find the height",
          fieldsetMessageUpdatedSuccessValueMessage: (input) => {
            if (input !== "") {
              return (`Height of value ${input} is: ${getHeightOfValue(input)}`);
            };
            return (<>&nbsp;</>);
          },
          fieldsetMessageUpdatedSuccessValueWithIcon: true,
          inputName: "Height-value",
          inputRegex: "^(-?\\d+(\\.\\d+)?)$",
          // implement isValidInputValue later
          // isValidInputValue: (input) => (true),
          isValidInputValue: (input, binarySearchTree) => {
            return (
              getIsValidInputValueFindHeight(
                input, 
                binarySearchTree,
                cloneObject
              )
            );
          },
          labelText: "Find the height of a value in the BST",
          // implement onClickHandlerSuccessful later
          onClickHandlerSuccessful: (input) => (true)
        },
        "fieldset5": {
          id: "fieldset5", 
          buttonText: "Find depth", 
          fieldsetMessageEmptyInputErrorValue: "Please enter a value",
          fieldsetMessageEmptyInputSuccessValue: <>&nbsp;</>,
          fieldsetMessageInputFormatErrorValue: "Please enter the value in the correct format",
          fieldsetMessageInputValueErrorValue: "Please only enter a value that exists in the BST",
          fieldsetMessageReadyToUpdateValue: "Ready to find the depth",
          fieldsetMessageUpdatedSuccessValueMessage: (input) => (`Depth of value ${input} is: ${getDepthOfValue(input)}`),
          fieldsetMessageUpdatedSuccessValueWithIcon: true,
          inputName: "Depth-value",
          inputRegex: "^(-?\\d+(\\.\\d+)?)$",
          // implement isValidInputValue later
          isValidInputValue: (input) => (true),
          labelText: "Find the depth of a value in the BST",
          // implement onClickHandlerSuccessful later
          onClickHandlerSuccessful: (input) => (true)
        }
      }
    }
  });
};
