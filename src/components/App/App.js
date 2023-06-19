import { useState } from 'react';
import { BinarySearchTree } from '../../utils/binarySearchTree/binarySearchTree.js';
import { ControlsBST } from '../ControlsBST/ControlsBST.js';
import { ControlsBSTWrapper } from '../ControlsBSTWrapper/ControlsBSTWrapper.js';
import { Header } from '../Header/Header.js';
import { HeaderWrapper } from '../HeaderWrapper/HeaderWrapper.js';
import styles from './App.module.scss';

export const App = () => {
  const [binarySearchTree, setBinarySearchTree] = useState(BinarySearchTree([-2, 3, 1]));
  // console.log(binarySearchTree.getRootNode());

  return (
    <div className={styles.App}>
        <HeaderWrapper>
          <Header title={"Binary Search Tree"} />
        </HeaderWrapper>
        <ControlsBSTWrapper>
          <ControlsBST binarySearchTree={binarySearchTree} setBinarySearchTree={setBinarySearchTree} />
        </ControlsBSTWrapper>
    </div>
  );
};
