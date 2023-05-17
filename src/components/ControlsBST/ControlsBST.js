import { Button } from '../Button/Button.js';
import { Form } from '../Form/Form.js';
import { FormWrapper } from '../FormWrapper/FormWrapper.js'
import { RebalanceButtonWrapper } from '../RebalanceButtonWrapper/RebalanceButtonWrapper.js';
import styles from './ControlsBST.module.scss';

export const ControlsBST = ({ binarySearchTree, setBinarySearchTree }) => {
  // console.log(binarySearchTree.getRootNode());
  // binarySearchTree.insertNode(-10);
  // binarySearchTree.insertNode(-20);
  // console.log(binarySearchTree.getRootNode());

  const rebalanceBinarySearchTree = (prevState) => {
    let bst = {...prevState};
    // bst.insertNode(-10);
    // bst.insertNode(-20);
    bst.rebalance();
    setBinarySearchTree(bst);
  };


  return (
    <div className={styles.ControlsBST}>
      <FormWrapper>
        <Form binarySearchTree={binarySearchTree} setBinarySearchTree={setBinarySearchTree} />
      </FormWrapper>
      <RebalanceButtonWrapper>
      {/* implement onClickHandler later */}
        {/* <Button onClickHandler={() => null}>Rebalance BST</Button> */}
        <Button onClickHandler={() => rebalanceBinarySearchTree(binarySearchTree)}>Rebalance BST</Button>
      </RebalanceButtonWrapper>
    </div>
  );
};
