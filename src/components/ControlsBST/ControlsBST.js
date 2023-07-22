import { useState } from 'react';
import { Button } from '../Button/Button.js';
import { cloneObject } from '../../utils/cloneObject/cloneObject.js';
import { Form } from '../Form/Form.js';
import { FormWrapper } from '../FormWrapper/FormWrapper.js';
import { getRebalancedBinarySearchTree } from '../../utils/getRebalancedBinarySearchTree/getRebalancedBinarySearchTree.js';
// import { RebalanceBSTButtonWrapper } from '../RebalanceBSTButtonWrapper/RebalanceBSTButtonWrapper.js';
import { RebalanceBSTButtonWrapper } from '../RebalanceBSTButtonWrapper/RebalanceBSTButtonWrapper.js';
import { RebalanceBSTButtonMessage } from '../RebalanceBSTButtonMessage/RebalanceBSTButtonMessage.js';
import { RebalanceBSTButtonMessageWrapper } from '../RebalanceBSTButtonMessageWrapper/RebalanceBSTButtonMessageWrapper.js';
import styles from './ControlsBST.module.scss';;

export const ControlsBST = ({ binarySearchTree, setBinarySearchTree }) => {
  // console.log(binarySearchTree.getRootNode());
  // binarySearchTree.insertNode(-10);
  // binarySearchTree.insertNode(-20);
  // console.log(binarySearchTree.getRootNode());
  const [lastUpdatedFieldsetId, setLastUpdatedFieldsetId] = useState("");


  // const rebalanceBinarySearchTree = (prevState) => {
  //   let bst = {...prevState};
  //   // bst.insertNode(-10);
  //   // bst.insertNode(-20);
  //   bst.rebalance();
  //   setBinarySearchTree(bst);
  // };

  return (
    <div className={styles.ControlsBST}>
      <FormWrapper>
        <Form binarySearchTree={binarySearchTree} setBinarySearchTree={setBinarySearchTree} />
      </FormWrapper>
      <RebalanceBSTButtonMessageWrapper>
        <RebalanceBSTButtonMessage 
          binarySearchTree={binarySearchTree}
          lastUpdatedFieldsetId={lastUpdatedFieldsetId}
          setBinarySearchTree={setBinarySearchTree}
          setLastUpdatedFieldsetId={setLastUpdatedFieldsetId}
        />
      </RebalanceBSTButtonMessageWrapper>
    </div>
  );

  // const rebalanceBinarySearchTree = (prevState) => {
  //   let bst = {...prevState};
  //   // bst.insertNode(-10);
  //   // bst.insertNode(-20);
  //   bst.rebalance();
  //   setBinarySearchTree(bst);
  // };

  // return (
  //   <div className={styles.ControlsBST}>
  //     <FormWrapper>
  //       <Form binarySearchTree={binarySearchTree} setBinarySearchTree={setBinarySearchTree} />
  //     </FormWrapper>
  //     <RebalanceButtonWrapper>
  //     {/* implement onClickHandler later */}
  //       {/* <Button onClickHandler={() => null}>Rebalance BST</Button> */}
  //       {/* <Button onClickHandler={() => rebalanceBinarySearchTree(binarySearchTree)}>Rebalance BST</Button> */}
  //       <Button onClickHandler={() => (setBinarySearchTree(getRebalancedBinarySearchTree(binarySearchTree, cloneObject)))}>Rebalance BST</Button>
  //     </RebalanceButtonWrapper>
  //   </div>
  // );
};
