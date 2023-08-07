import { useState } from 'react';
import { Form } from '../Form/Form.js';
import { FormWrapper } from '../FormWrapper/FormWrapper.js';
import { RebalanceBSTButtonMessage } from '../RebalanceBSTButtonMessage/RebalanceBSTButtonMessage.js';
import { RebalanceBSTButtonMessageWrapper } from '../RebalanceBSTButtonMessageWrapper/RebalanceBSTButtonMessageWrapper.js';
import styles from './ControlsBST.module.scss';;

export const ControlsBST = ({ binarySearchTree, setBinarySearchTree }) => {
  const [lastUpdatedFieldsetId, setLastUpdatedFieldsetId] = useState(null);

  return (
    <div className={styles.ControlsBST}>
      <FormWrapper>
        <Form 
          binarySearchTree={binarySearchTree} 
          lastUpdatedFieldsetId={lastUpdatedFieldsetId}
          setBinarySearchTree={setBinarySearchTree} 
          setLastUpdatedFieldsetId={setLastUpdatedFieldsetId}
        />
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
};
