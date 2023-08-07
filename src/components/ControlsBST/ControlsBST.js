import { useState } from 'react';
import { Form } from '../Form/Form.js';
import { FormWrapper } from '../FormWrapper/FormWrapper.js';
import { RebalanceBST } from '../RebalanceBST/RebalanceBST.js';
import { RebalanceBSTWrapper } from '../RebalanceBSTWrapper/RebalanceBSTWrapper.js';
import styles from './ControlsBST.module.scss';

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
