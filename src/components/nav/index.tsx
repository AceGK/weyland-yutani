import React from 'react';
import styles from './styles.module.scss';

const Nav: React.FC = () => {
  return (
    <div className={styles.nav}>
      <i className="icon-bars-solid"></i>
    </div>
  );
};

export default Nav;
