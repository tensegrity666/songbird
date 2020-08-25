import React from 'react';

import store from '../../store';
import styles from './index.module.css';

const WinMessage = () => {
  const { wrapper } = styles;
  const { score, maximumPoints } = store.getState();

  return (
    <div className={`jumbotron ${wrapper}`}>
      <h2>Вы победили!</h2>
      <p>
        Поздравляем, Вы набрали {score} баллов из {maximumPoints}.
      </p>
    </div>
  );
};

export default WinMessage;
