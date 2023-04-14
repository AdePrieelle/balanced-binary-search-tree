import { ControlsBST } from '../ControlsBST/ControlsBST.js';
import { ControlsBSTWrapper } from '../ControlsBSTWrapper/ControlsBSTWrapper.js';
import { Header } from '../Header/Header.js';
import { HeaderWrapper } from '../HeaderWrapper/HeaderWrapper.js';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.App}>
        <HeaderWrapper>
          <Header title={"Binary Search Tree"} />
        </HeaderWrapper>
        <ControlsBSTWrapper>
          <ControlsBST />
        </ControlsBSTWrapper>
    </div>
  );
};
