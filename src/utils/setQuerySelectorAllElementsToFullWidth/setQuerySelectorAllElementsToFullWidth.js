export const setQuerySelectorAllElementsToFullWidth = (querySelector) => {
  const elements = document.querySelectorAll(querySelector);
  elements.forEach(element => {
    element.style.width = "100%";
  });
};
