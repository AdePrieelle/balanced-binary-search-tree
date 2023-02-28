import React from 'react';
import styles from './App.module.scss';
import { Header } from '../Header/Header.js';
import { ControlsBST } from '../ControlsBST/ControlsBST.js';

export const App = () => {
  return (
    <div className={styles.App}>
        <Header title={"Binary Search Tree"} />
        <ControlsBST />
    </div>
  );
};
