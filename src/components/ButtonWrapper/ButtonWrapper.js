import { useLargestElementWidthForAllQuerySelectorElementWidthsWithMediaQueryBreakpoint } from '../../hooks/useLargestElementWidthForAllQuerySelectorElementWidthsWithMediaQueryBreakpoint.js';
import styles from './ButtonWrapper.module.scss';
import scssVariables from '../../styles/partials/_export.scss';

export const ButtonWrapper = ({ children, gridArea = null }) => {
  useLargestElementWidthForAllQuerySelectorElementWidthsWithMediaQueryBreakpoint(`.${styles.ButtonWrapper}`, scssVariables.mediaQuerySmallScreen);
  
  return (
    <div className={`${styles["ButtonWrapper"]}`} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
