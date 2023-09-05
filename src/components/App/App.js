import { useState } from 'react';
import { BinarySearchTree } from '../../utils/binarySearchTree/binarySearchTree.js';
import { binarySearchTreeInitialValuesArray } from '../../data/binarySearchTreeData.js';
import { ControlsBST } from '../ControlsBST/ControlsBST.js';
import { ControlsBSTWrapper } from '../ControlsBSTWrapper/ControlsBSTWrapper.js';
import { Header } from '../Header/Header.js';
import { headerTitle } from '../../data/headerData.js';
import { HeaderWrapper } from '../HeaderWrapper/HeaderWrapper.js';
import { VisualizationBST } from '../VisualizationBST/VisualizationBST.js';
import { VisualizationBSTWrapper } from '../VisualizationBSTWrapper/VisualizationBSTWrapper.js';
import styles from './App.module.scss';

export const App = () => {
  const [binarySearchTree, setBinarySearchTree] = useState(BinarySearchTree(binarySearchTreeInitialValuesArray));
  const [lastUpdatedFieldsetId, setLastUpdatedFieldsetId] = useState(null);

  return (
    <div className={`${styles["App"]}`}>
        <HeaderWrapper>
          <Header 
            title={headerTitle} 
          />
        </HeaderWrapper>
        <ControlsBSTWrapper>
          <ControlsBST 
            binarySearchTree={binarySearchTree}
            lastUpdatedFieldsetId={lastUpdatedFieldsetId}
            setBinarySearchTree={setBinarySearchTree}
            setLastUpdatedFieldsetId={setLastUpdatedFieldsetId}
          />
        </ControlsBSTWrapper>
        <VisualizationBSTWrapper>
          <VisualizationBST 
            binarySearchTree={binarySearchTree}
            lastUpdatedFieldsetId={lastUpdatedFieldsetId}
            setBinarySearchTree={setBinarySearchTree}
            setLastUpdatedFieldsetId={setLastUpdatedFieldsetId}
          />
        </VisualizationBSTWrapper>
    </div>
  );
};
