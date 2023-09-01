import { cloneObject } from "../utils/cloneObject/cloneObject.js";
import { delimiter } from "./delimiter.js";
import { getArrayFromString } from "../utils/getArrayFromString/getArrayFromString.js";
import { getArrayWithStringNumbersConvertedToNumbersFromArray } from "../utils/getArrayWithStringNumbersConvertedToNumbersFromArray/getArrayWithStringNumbersConvertedToNumbersFromArray.js";
import { getArrayWithStringNumbersConvertedToNumbersFromString } from "../utils/getArrayWithStringNumbersConvertedToNumbersFromString/getArrayWithStringNumbersConvertedToNumbersFromString.js";
import { getBinarySearchTreeWithAddedAdditionalInputValues } from "../utils/getBinarySearchTreeWithAddedAdditionalInputValues/getBinarySearchTreeWithAddedAdditionalInputValues.js";
import { getBinarySearchTreeWithAddedArrayElements } from "../utils/getBinarySearchTreeWithAddedArrayElements/getBinarySearchTreeWithAddedArrayElements.js";
import { getBinarySearchTreeWithAddedInitialInputValues } from "../utils/getBinarySearchTreeWithAddedInitialInputValues/getBinarySearchTreeWithAddedInitialInputValues.js";
import { getBinarySearchTreeWithRemovedArrayElements } from "../utils/getBinarySearchTreeWithRemovedArrayElements/getBinarySearchTreeWithRemovedArrayElements.js";
import { getBinarySearchTreeWithRemovedInputValues } from "../utils/getBinarySearchTreeWithRemovedInputValues/getBinarySearchTreeWithRemovedInputValues.js";
import { getDepthOfValue } from "../utils/getDepthOfValue/getDepthOfValue.js";
import { getFindNodeInBinarySearchTreeWithInputValue } from "../utils/getFindNodeInBinarySearchTreeWithInputValue/getFindNodeInBinarySearchTreeWithInputValue.js";
import { getHeightOfValue } from "../utils/getHeightOfValue/getHeightOfValue.js";
import { getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree } from "../utils/getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree/getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree.js";
import { getIsArrayOnlyWithValuesThatExistInBinarySearchTree } from "../utils/getIsArrayOnlyWithValuesThatExistInBinarySearchTree/getIsArrayOnlyWithValuesThatExistInBinarySearchTree.js";
import { getIsValidInputValueCreateBST } from "../utils/getIsValidInputValueCreateBST/getIsValidInputValueCreateBST.js";
import { getIsValidInputValueFindDepth } from "../utils/getIsValidInputValueFindDepth/getIsValidInputValueFindDepth.js";
import { getIsValidInputValueFindHeight } from "../utils/getIsValidInputValueFindHeight/getIsValidInputValueFindHeight.js";
import { getIsValidInputValueAddAdditionalValues } from "../utils/getIsValidInputValueAddAdditionalValues/getIsValidInputValueAddAdditionalValues.js";
import { getIsValidInputValueRemoveValues } from "../utils/getIsValidInputValueRemoveValues/getIsValidInputValueRemoveValues.js";
import { FieldsetMessageUpdatedSuccessValue } from "../components/FieldsetMessageUpdatedSuccessValue/FieldsetMessageUpdatedSuccessValue.js";

export const fieldsetData = {
  fieldsets: {
    ids: ["fieldset1", "fieldset2", "fieldset3", "fieldset4", "fieldset5"],
    entities: {
      "fieldset1": { 
        buttonText: "Create BST", 
        fieldsetMessageDuplicateInputValuesErrorValue: "Please remove duplicate input values",
        fieldsetMessageEmptyInputErrorValue: "Please enter the initial value(s)",
        fieldsetMessageEmptyInputSuccessValue: <>&nbsp;</>,
        fieldsetMessageInputFormatErrorValue: "Please enter the initial number(s) in the correct format",
        fieldsetMessageInputValueErrorValue: "Please enter the initial number(s) in the correct format",
        fieldsetMessageReadyToUpdateValue: "The BST is ready to be updated",
        getFieldsetMessageUpdatedSuccessValue: (input, binarySearchTree) => {
          return (
            <FieldsetMessageUpdatedSuccessValue icon={true} message={`The BST has been updated`} />
          );
        },
        getIsValidInputValue: (input, binarySearchTree, isValidInputFormat) => { 
          return (
            getIsValidInputValueCreateBST(
              isValidInputFormat
            )
          ); 
        },
        id: "fieldset1",
        inputName: "Initial-value(s)",
        labelText: "Add initial value(s) seperated by a comma and a space",
        onClickHandlerSuccessful: (input, binarySearchTree, setBinarySearchTree) => {
          setBinarySearchTree(
            getBinarySearchTreeWithAddedInitialInputValues(
              input, 
              binarySearchTree, 
              cloneObject,
              getArrayWithStringNumbersConvertedToNumbersFromString, 
              delimiter, 
              getArrayFromString, 
              getArrayWithStringNumbersConvertedToNumbersFromArray
            )
          );
        },
        regexPattern: "^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"
      },
      "fieldset2": {
        buttonText: "Add values", 
        fieldsetMessageDuplicateInputValuesErrorValue: "Please remove duplicate input values",
        fieldsetMessageEmptyInputErrorValue: "Please enter the additional value(s)",
        fieldsetMessageEmptyInputSuccessValue: <>&nbsp;</>,
        fieldsetMessageInputFormatErrorValue: "Please enter the additional value(s) in the correct format",
        fieldsetMessageInputValueErrorValue: "Please only enter value(s) that don't already exist in the BST",
        fieldsetMessageReadyToUpdateValue: "The BST is ready to be updated",
        getFieldsetMessageUpdatedSuccessValue: (input, binarySearchTree) => {
          return (
            <FieldsetMessageUpdatedSuccessValue icon={true} message={`The BST has been updated`} />
          );
        },
        getIsValidInputValue: (input, binarySearchTree, isValidInputFormat) => {
          return (
            getIsValidInputValueAddAdditionalValues(
              input, 
              binarySearchTree,
              cloneObject,
              getArrayWithStringNumbersConvertedToNumbersFromString, 
              delimiter, 
              getArrayFromString, 
              getArrayWithStringNumbersConvertedToNumbersFromArray,
              getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree,
              isValidInputFormat
            )
          );
        },
        id: "fieldset2",
        inputName: "Add-values",
        labelText: "Add additional value(s) seperated by a comma and a space",
        onClickHandlerSuccessful: (input, binarySearchTree, setBinarySearchTree) => {
          setBinarySearchTree(
            getBinarySearchTreeWithAddedAdditionalInputValues(
              input, 
              binarySearchTree, 
              cloneObject,
              getArrayWithStringNumbersConvertedToNumbersFromString, 
              delimiter, 
              getArrayFromString, 
              getArrayWithStringNumbersConvertedToNumbersFromArray,
              getBinarySearchTreeWithAddedArrayElements
            )
          );
        },
        regexPattern: "^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"
      },
      "fieldset3": {
        buttonText: "Remove values", 
        fieldsetMessageDuplicateInputValuesErrorValue: "Please remove duplicate input values",
        fieldsetMessageEmptyInputErrorValue: "Please enter the value(s) to be removed",
        fieldsetMessageEmptyInputSuccessValue: <>&nbsp;</>,
        fieldsetMessageInputFormatErrorValue: "Please enter the value(s) to be removed in the correct format",
        fieldsetMessageInputValueErrorValue: "Please only enter value(s) that already exist in the BST",
        fieldsetMessageReadyToUpdateValue: "The BST is ready to be updated",
        getFieldsetMessageUpdatedSuccessValue: (input, binarySearchTree) => {
          return (
            <FieldsetMessageUpdatedSuccessValue icon={true} message={`The BST has been updated`} />
          );
        },
        getIsValidInputValue: (input, binarySearchTree, isValidInputFormat) => {
          return (
            getIsValidInputValueRemoveValues(
              input, 
              binarySearchTree,
              cloneObject,
              getArrayWithStringNumbersConvertedToNumbersFromString, 
              delimiter, 
              getArrayFromString, 
              getArrayWithStringNumbersConvertedToNumbersFromArray,
              getIsArrayOnlyWithValuesThatExistInBinarySearchTree,
              isValidInputFormat
            )
          );
        },
        id: "fieldset3",
        inputName: "Remove-values",
        labelText: "Remove value(s) seperated by a comma and a space",
        onClickHandlerSuccessful: (input, binarySearchTree, setBinarySearchTree) => {
          setBinarySearchTree(
            getBinarySearchTreeWithRemovedInputValues(
              input, 
              binarySearchTree, 
              cloneObject,
              getArrayWithStringNumbersConvertedToNumbersFromString, 
              delimiter, 
              getArrayFromString, 
              getArrayWithStringNumbersConvertedToNumbersFromArray,
              getBinarySearchTreeWithRemovedArrayElements
            )
          );
        },
        regexPattern: "^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"
      },
      "fieldset4": {
        buttonText: "Find height", 
        fieldsetMessageDuplicateInputValuesErrorValue: "Please remove duplicate input values",
        fieldsetMessageEmptyInputErrorValue: "Please enter a value",
        fieldsetMessageEmptyInputSuccessValue: <>&nbsp;</>,
        fieldsetMessageInputFormatErrorValue: "Please enter the value in the correct format",
        fieldsetMessageInputValueErrorValue: "Please only enter a value that exists in the BST",
        fieldsetMessageReadyToUpdateValue: "Ready to find the height",
        getFieldsetMessageUpdatedSuccessValue: (input, binarySearchTree) => {
          return (
            <FieldsetMessageUpdatedSuccessValue icon={true} message={`Height of value ${input} is: ${getHeightOfValue(input, binarySearchTree, cloneObject, getFindNodeInBinarySearchTreeWithInputValue, "unknown")}`} />
          );
        },
        getIsValidInputValue: (input, binarySearchTree, isValidInputFormat) => {
          return (
            getIsValidInputValueFindHeight(
              input, 
              binarySearchTree,
              cloneObject,
              isValidInputFormat,
              getFindNodeInBinarySearchTreeWithInputValue
            )
          );
        },
        id: "fieldset4",
        inputName: "Height-value",
        labelText: "Find the height of a value in the BST",
        onClickHandlerSuccessful: (input, binarySearchTree, setBinarySearchTree) => {
          return (null);
        },
        regexPattern: "^(-?\\d+(\\.\\d+)?)$",
      },
      "fieldset5": {
        buttonText: "Find depth", 
        fieldsetMessageDuplicateInputValuesErrorValue: "Please remove duplicate input values",
        fieldsetMessageEmptyInputErrorValue: "Please enter a value",
        fieldsetMessageEmptyInputSuccessValue: <>&nbsp;</>,
        fieldsetMessageInputFormatErrorValue: "Please enter the value in the correct format",
        fieldsetMessageInputValueErrorValue: "Please only enter a value that exists in the BST",
        fieldsetMessageReadyToUpdateValue: "Ready to find the depth",
        getFieldsetMessageUpdatedSuccessValue: (input, binarySearchTree) => {
          return (
            <FieldsetMessageUpdatedSuccessValue icon={true} message={`Depth of value ${input} is: ${getDepthOfValue(input, binarySearchTree, cloneObject, getFindNodeInBinarySearchTreeWithInputValue, "unknown")}`} />
          );
        },
        getIsValidInputValue: (input, binarySearchTree, isValidInputFormat) => {
          return (
            getIsValidInputValueFindDepth(
              input, 
              binarySearchTree,
              cloneObject,
              isValidInputFormat,
              getFindNodeInBinarySearchTreeWithInputValue
            )
          );
        },
        id: "fieldset5",
        inputName: "Depth-value",
        labelText: "Find the depth of a value in the BST",
        onClickHandlerSuccessful: (input, binarySearchTree, setBinarySearchTree) => {
          return (null);
        },
        regexPattern: "^(-?\\d+(\\.\\d+)?)$"
      }
    }
  }
};
