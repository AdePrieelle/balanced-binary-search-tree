export const getRebalanceBSTMessage = (
  isBSTBalanced,
  isLastUpdatedFieldset,
  isRebalancedBSTEqualToBSTBeforeRebalancing,
  rebalanceBSTMessageAlreadyBalancedBSTValue,
  rebalanceBSTMessageEmptyValue,
  rebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue,
  rebalanceBSTMessageUpdatedRebalancedValue
) => {
  if (
       typeof(isBSTBalanced) !== "boolean"
    || typeof(isLastUpdatedFieldset) !== "boolean"
    || typeof(isRebalancedBSTEqualToBSTBeforeRebalancing) !== "boolean"
    || typeof(rebalanceBSTMessageAlreadyBalancedBSTValue) !== "string"
    || typeof(rebalanceBSTMessageEmptyValue) !== "object"
    || typeof(rebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue) !== "string"
    || typeof(rebalanceBSTMessageUpdatedRebalancedValue) !== "string"
  ) {
    return (<>&nbsp;</>);
  };

  if (!isLastUpdatedFieldset) {
    return (rebalanceBSTMessageEmptyValue);
  };
  if (isLastUpdatedFieldset && !isBSTBalanced) {
    return (rebalanceBSTMessageUpdatedRebalancedValue);
  };
  if (isLastUpdatedFieldset && isBSTBalanced && !isRebalancedBSTEqualToBSTBeforeRebalancing) {
    return (rebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue);
  };
  if (isLastUpdatedFieldset && isBSTBalanced && isRebalancedBSTEqualToBSTBeforeRebalancing) {
    return (rebalanceBSTMessageAlreadyBalancedBSTValue);
  };

  return (rebalanceBSTMessageEmptyValue);
};
