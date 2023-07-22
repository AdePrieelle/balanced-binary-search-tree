import { useId } from 'react';
import { Button } from '../Button/Button.js';
import { cloneObject } from '../../utils/cloneObject/cloneObject.js';
import { getRebalancedBinarySearchTree } from '../../utils/getRebalancedBinarySearchTree/getRebalancedBinarySearchTree.js';
import { getRebalanceBSTMessage } from '../../utils/getRebalanceBSTMessage/getRebalanceBSTMessage.js';
import { RebalanceBSTButtonWrapper } from '../RebalanceBSTButtonWrapper/RebalanceBSTButtonWrapper.js';
import { RebalanceBSTMessage } from '../RebalanceBSTMessage/RebalanceBSTMessage.js';
import { RebalanceBSTMessageWrapper } from '../RebalanceBSTMessageWrapper/RebalanceBSTMessageWrapper.js';
import styles from './RebalanceBSTButtonMessage.module.scss';

export const RebalanceBSTButtonMessage = ({
  binarySearchTree,
  lastUpdatedFieldsetId,
  setBinarySearchTree,
  setLastUpdatedFieldsetId
}) => {
  const RebalanceBSTButtonMessageId = useId();



  // use the commented version
  // const isLastUpdatedFieldset = (lastUpdatedFieldsetId === RebalanceBSTButtonMessageId);
  const isLastUpdatedFieldset = true;

  // make function for getIsBSTBalanced
  const isBSTBalanced = true;

  // maken function for getIsRebalancedBSTEqualToBSTBeforeRebalancing
  const isRebalancedBSTEqualToBSTBeforeRebalancing = true;


  // add file rebalanceBSTData with object values:
  const rebalanceBSTMessageAlreadyBalancedBSTValue = "The BST is already balanced";
  const rebalanceBSTMessageEmptyValue = (<>&nbsp;</>);
  const rebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue = ("The already balanced BST has been rebalanced");
  const rebalanceBSTMessageUpdatedRebalancedValue = ("The BST has been rebalanced");

  // add getRebalanceMessage function to determine rebalanceMessage


  const rebalanceBSTMessage = getRebalanceBSTMessage(
    isBSTBalanced,
    isLastUpdatedFieldset,
    isRebalancedBSTEqualToBSTBeforeRebalancing,
    rebalanceBSTMessageAlreadyBalancedBSTValue,
    rebalanceBSTMessageEmptyValue,
    rebalanceBSTMessageUpdatedAlreadyBalancedBSTRebalancedValue,
    rebalanceBSTMessageUpdatedRebalancedValue
  );

  const onClickHandler = () => {
    setLastUpdatedFieldsetId(RebalanceBSTButtonMessageId);
    setBinarySearchTree(getRebalancedBinarySearchTree(binarySearchTree, cloneObject))
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
