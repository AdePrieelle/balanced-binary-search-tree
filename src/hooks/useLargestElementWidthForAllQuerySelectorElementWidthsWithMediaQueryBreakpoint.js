import { useLayoutEffect } from "react";
import { useWindowSize } from './useWindowSize.js';
import { getQuerySelectorAllLargestElementWidth } from "../utils/getQuerySelectorAllLargestElementWidth/getQuerySelectorAllLargestElementWidth.js";
import { setQuerySelectorAllElementsToFullWidth } from "../utils/setQuerySelectorAllElementsToFullWidth/setQuerySelectorAllElementsToFullWidth.js";
import { setQuerySelectorAllElementsToSameWidth } from "../utils/setQuerySelectorAllElementsToSameWidth/setQuerySelectorAllElementsToSameWidth.js";
import { setQuerySelectorAllElementWidthsToLargestElementWidth } from "../utils/setQuerySelectorAllElementWidthsToLargestElementWidth/setQuerySelectorAllElementWidthsToLargestElementWidth.js";

export const useLargestElementWidthForAllQuerySelectorElementWidthsWithMediaQueryBreakpoint = (querySelector, mediaQueryBreakpoint = null) => {
  const { width } = useWindowSize();

  useLayoutEffect(() => {
    const setAllQuerySelectorElementWidthsToLargestElementWidth = () => {
      setQuerySelectorAllElementWidthsToLargestElementWidth(querySelector, getQuerySelectorAllLargestElementWidth, setQuerySelectorAllElementsToSameWidth);
    };

    if (mediaQueryBreakpoint === null) {
      setAllQuerySelectorElementWidthsToLargestElementWidth();
    } else if (width < (+mediaQueryBreakpoint)) {
      setQuerySelectorAllElementsToFullWidth(querySelector);
    } else if (width >= (+mediaQueryBreakpoint)) {
      setAllQuerySelectorElementWidthsToLargestElementWidth();
    };
  }, [querySelector, mediaQueryBreakpoint, width]);
};
