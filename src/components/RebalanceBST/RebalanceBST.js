import { useId, useState } from 'react';
import { BinarySearchTree } from '../../utils/binarySearchTree/binarySearchTree.js';
import { Button } from '../Button/Button.js';
import { cloneObject } from '../../utils/cloneObject/cloneObject.js';
import { getAreObjectValuesEqual } from '../../utils/getAreObjectValuesEqual/getAreObjectValuesEqual.js';
import { getIsBSTBalanced } from '../../utils/getIsBSTBalanced/getIsBSTBalanced.js';
import { getIsRebalancedBSTEqualToBSTBeforeRebalancing } from '../../utils/getIsRebalancedBSTEqualToBSTBeforeRebalancing/getIsRebalancedBSTEqualToBSTBeforeRebalancing.js';
import { getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues } from '../../utils/getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues/getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues.js';
import { getRebalanceBSTMessage } from '../../utils/getRebalanceBSTMessage/getRebalanceBSTMessage.js';
import { getRebalancedBinarySearchTree } from '../../utils/getRebalancedBinarySearchTree/getRebalancedBinarySearchTree.js';
import { rebalanceBSTButtonText, rebalanceBSTMessageAlreadyBalancedBSTValue, rebalanceBSTMessageEmptyValue, rebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue, rebalanceBSTMessageUpdatedRebalancedValue, rebalanceBSTTitleText } from '../../data/rebalanceBSTData.js';
import { RebalanceBSTButtonWrapper } from '../RebalanceBSTButtonWrapper/RebalanceBSTButtonWrapper.js';
import { RebalanceBSTMessage } from '../RebalanceBSTMessage/RebalanceBSTMessage.js';
import { RebalanceBSTMessageWrapper } from '../RebalanceBSTMessageWrapper/RebalanceBSTMessageWrapper.js';
import { RebalanceBSTTitle } from '../RebalanceBSTTitle/RebalanceBSTTitle.js';
import { RebalanceBSTTitleWrapper } from '../RebalanceBSTTitleWrapper/RebalanceBSTTitleWrapper.js';
import styles from './RebalanceBST.module.scss';

export const RebalanceBST = ({
  binarySearchTree,
  lastUpdatedFieldsetId,
  setBinarySearchTree,
  setLastUpdatedFieldsetId
}) => {
  const rebalanceBSTId = useId();
  const [isBSTBalancedBeforeRebalancing, setIsBSTBalancedBeforeRebalancing] = useState(true);
  const [isRebalancedBSTEqualToBSTBeforeRebalancing, setIsRebalancedBSTEqualToBSTBeforeRebalancing] = useState(true);
  const isLastUpdatedFieldset = (rebalanceBSTId === lastUpdatedFieldsetId);

  const rebalanceBSTMessage = getRebalanceBSTMessage(
    isBSTBalancedBeforeRebalancing,
    isLastUpdatedFieldset,
    isRebalancedBSTEqualToBSTBeforeRebalancing,
    rebalanceBSTMessageAlreadyBalancedBSTValue,
    rebalanceBSTMessageEmptyValue,
    rebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue,
    rebalanceBSTMessageUpdatedRebalancedValue
  );
  
  const onClickHandler = () => {
    setIsBSTBalancedBeforeRebalancing(getIsBSTBalanced(binarySearchTree, cloneObject));
    const isRebalancedBSTEqualToBSTBeforeRebalancingValue = getIsRebalancedBSTEqualToBSTBeforeRebalancing(binarySearchTree, BinarySearchTree, getAreObjectValuesEqual, getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues);
    setIsRebalancedBSTEqualToBSTBeforeRebalancing(isRebalancedBSTEqualToBSTBeforeRebalancingValue);
    setLastUpdatedFieldsetId(rebalanceBSTId);
    if (!isRebalancedBSTEqualToBSTBeforeRebalancingValue) {
      setBinarySearchTree(getRebalancedBinarySearchTree(binarySearchTree, cloneObject));
    };
  };

  return (
    <div className={`${styles["RebalanceBST"]}`}>
      <RebalanceBSTTitleWrapper>
        <RebalanceBSTTitle>
          {rebalanceBSTTitleText}
        </RebalanceBSTTitle>
      </RebalanceBSTTitleWrapper>
      <RebalanceBSTMessageWrapper>
        <RebalanceBSTMessage 
          rebalanceBSTMessage={rebalanceBSTMessage}
        />
      </RebalanceBSTMessageWrapper>
      <RebalanceBSTButtonWrapper>
        <Button onClickHandler={() => (onClickHandler())}>
          {rebalanceBSTButtonText}
        </Button>
      </RebalanceBSTButtonWrapper>
    </div>
  );
};
