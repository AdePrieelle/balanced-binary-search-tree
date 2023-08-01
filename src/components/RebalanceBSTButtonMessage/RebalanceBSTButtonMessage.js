import { useId, useState } from 'react';
import { BinarySearchTree } from '../../utils/binarySearchTree/binarySearchTree.js';
import { Button } from '../Button/Button.js';
import { cloneObject } from '../../utils/cloneObject/cloneObject.js';
import { getAreObjectValuesEqual } from '../../utils/getAreObjectValuesEqual/getAreObjectValuesEqual.js';
import { getIsBSTBalanced } from '../../utils/getIsBSTBalanced/getIsBSTBalanced.js';
import { getIsRebalancedBSTEqualToBSTBeforeRebalancing } from '../../utils/getIsRebalancedBSTEqualToBSTBeforeRebalancing/getIsRebalancedBSTEqualToBSTBeforeRebalancing.js';
import { getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues } from '../../utils/getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues/getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues.js';
import { getRebalancedBinarySearchTree } from '../../utils/getRebalancedBinarySearchTree/getRebalancedBinarySearchTree.js';
import { getRebalanceBSTMessage } from '../../utils/getRebalanceBSTMessage/getRebalanceBSTMessage.js';
import { RebalanceBSTButtonWrapper } from '../RebalanceBSTButtonWrapper/RebalanceBSTButtonWrapper.js';
import { RebalanceBSTMessage } from '../RebalanceBSTMessage/RebalanceBSTMessage.js';
import { rebalanceBSTMessageAlreadyBalancedBSTValue, rebalanceBSTMessageEmptyValue, rebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue, rebalanceBSTMessageUpdatedRebalancedValue } from '../../data/rebalanceBSTData.js';
import { RebalanceBSTMessageWrapper } from '../RebalanceBSTMessageWrapper/RebalanceBSTMessageWrapper.js';
import styles from './RebalanceBSTButtonMessage.module.scss';

export const RebalanceBSTButtonMessage = ({
  binarySearchTree,
  lastUpdatedFieldsetId,
  setBinarySearchTree,
  setLastUpdatedFieldsetId
}) => {
  const rebalanceBSTButtonMessageId = useId();
  const [isBSTBalancedBeforeRebalancing, setIsBSTBalancedBeforeRebalancing] = useState(true);
  const [isRebalancedBSTEqualToBSTBeforeRebalancing, setIsRebalancedBSTEqualToBSTBeforeRebalancing] = useState(true);
  const isLastUpdatedFieldset = (rebalanceBSTButtonMessageId === lastUpdatedFieldsetId);

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
    setLastUpdatedFieldsetId(rebalanceBSTButtonMessageId);
    if (!isRebalancedBSTEqualToBSTBeforeRebalancingValue) {
      setBinarySearchTree(getRebalancedBinarySearchTree(binarySearchTree, cloneObject));
    };
  };

  return (
    <div className={`${styles["RebalanceBSTButtonMessage"]}`}>
      <RebalanceBSTButtonWrapper>
        <Button onClickHandler={() => (onClickHandler())}>Rebalance BST</Button>
      </RebalanceBSTButtonWrapper>
      <RebalanceBSTMessageWrapper>
        <RebalanceBSTMessage 
          rebalanceBSTMessage={rebalanceBSTMessage}
        />
      </RebalanceBSTMessageWrapper>
    </div>
  );
};
