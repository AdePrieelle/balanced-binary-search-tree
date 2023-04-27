export const getQuerySelectorAllLargestElementWidth = (querySelector) => {
  const elements = document.querySelectorAll(querySelector);
  let largestElementWidth = 0;
  elements.forEach(element => {
    element.style.width = "fit-content";
  });
  elements.forEach(element => {
    if (element.getBoundingClientRect().width > largestElementWidth) {
      largestElementWidth = element.getBoundingClientRect().width;
    };
  });
  return (
    largestElementWidth
  );
};
