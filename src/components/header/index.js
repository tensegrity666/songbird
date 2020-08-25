import React from 'react';

import ScoreCounter from '../score-counter';
import styles from './index.module.css';

const Header = () => {
  const { header, logo } = styles;

  return (
    <header className={`navbar bg-light ${header}`}>
      <h1 className={logo}>SongBird</h1>
      <ScoreCounter />
    </header>
  );
};

export default Header;
