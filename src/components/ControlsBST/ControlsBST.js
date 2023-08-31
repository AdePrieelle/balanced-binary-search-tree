import { useState } from 'react';
import { ComponentTitle } from '../ComponentTitle/ComponentTitle.js';
import { ComponentTitleWrapper } from '../ComponentTitleWrapper/ComponentTitleWrapper.js';
import { controlsBSTTitle } from '../../data/controlsBSTData.js';
import { Form } from '../Form/Form.js';
import { FormWrapper } from '../FormWrapper/FormWrapper.js';
import { RebalanceBST } from '../RebalanceBST/RebalanceBST.js';
import { RebalanceBSTWrapper } from '../RebalanceBSTWrapper/RebalanceBSTWrapper.js';
import styles from './ControlsBST.module.scss';

export const ControlsBST = ({ 
  binarySearchTree, 
  setBinarySearchTree 
}) => {
  const [lastUpdatedFieldsetId, setLastUpdatedFieldsetId] = useState(null);

  return (
    <div className={styles.ControlsBST}>
      <ComponentTitleWrapper>
        <ComponentTitle
          title={controlsBSTTitle}
        />
      </ComponentTitleWrapper>
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
