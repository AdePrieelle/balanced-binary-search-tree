export const setQuerySelectorAllElementsToSameWidth = (querySelector, width) => {
  const elements = document.querySelectorAll(querySelector);
  elements.forEach(element => {
    element.style.width = `${width}px`;
  });
};
