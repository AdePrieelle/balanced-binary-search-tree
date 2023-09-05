import { ComponentTitle } from '../ComponentTitle/ComponentTitle.js';
import { ComponentTitleWrapper } from '../ComponentTitleWrapper/ComponentTitleWrapper.js';
import { RebalanceBST } from '../RebalanceBST/RebalanceBST.js';
import { RebalanceBSTWrapper } from '../RebalanceBSTWrapper/RebalanceBSTWrapper.js';
import { visualizationBSTTitle } from '../../data/visualizationBSTData.js';
import styles from './VisualizationBST.module.scss';

export const VisualizationBST = ({
  binarySearchTree,
  lastUpdatedFieldsetId,
  setBinarySearchTree,
  setLastUpdatedFieldsetId
}) => {
  return (
    <div className={styles.VisualizationBST}>
      <ComponentTitleWrapper>
        <ComponentTitle
          title={visualizationBSTTitle}
        />
      </ComponentTitleWrapper>
      <RebalanceBSTWrapper>
        <RebalanceBST
          binarySearchTree={binarySearchTree}
          lastUpdatedFieldsetId={lastUpdatedFieldsetId}
          setBinarySearchTree={setBinarySearchTree}
          setLastUpdatedFieldsetId={setLastUpdatedFieldsetId}
        />
      </RebalanceBSTWrapper>
    </div>
  );
};
