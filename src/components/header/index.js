import React from 'react';

import ScoreCounter from '../score-counter';
import styles from './index.module.css';
import store from '../../redux/store';

const Header = () => {
  const { header, logo } = styles;
  const { score } = store.getState();

  return (
    <header className={`navbar navbar-expand-lg bg-light ${header}`}>
      <h1 className={logo}>SongBird</h1>
      <ScoreCounter score={score} />
    </header>
  );
};

export default Header;
