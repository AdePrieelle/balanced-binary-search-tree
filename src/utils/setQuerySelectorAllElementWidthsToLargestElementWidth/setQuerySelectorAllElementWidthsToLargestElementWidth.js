export const setQuerySelectorAllElementWidthsToLargestElementWidth = (querySelector, getQuerySelectorAllLargestElementWidth, setQuerySelectorAllElementsToSameWidth) => {
  const largestSelectorElementWidth = getQuerySelectorAllLargestElementWidth(querySelector);
  setQuerySelectorAllElementsToSameWidth(querySelector, largestSelectorElementWidth);
};
