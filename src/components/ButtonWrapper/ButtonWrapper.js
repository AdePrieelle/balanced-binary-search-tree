import scssVariables from '../../styles/partials/_export.scss';
import { useLargestElementWidthForAllQuerySelectorElementWidthsWithMediaQueryBreakpoint } from '../../hooks/useLargestElementWidthForAllQuerySelectorElementWidthsWithMediaQueryBreakpoint.js';
import styles from './ButtonWrapper.module.scss';

export const ButtonWrapper = ({ 
  children
}) => {
  useLargestElementWidthForAllQuerySelectorElementWidthsWithMediaQueryBreakpoint(`.${styles.ButtonWrapper}`, scssVariables.mediaQuerySmallScreen);
  
  return (
    <div className={`${styles["ButtonWrapper"]}`}>
      {children}
    </div>
  );
};
