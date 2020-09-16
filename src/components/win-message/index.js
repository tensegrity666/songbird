import React from 'react';

import store from '../../store';
import styles from './index.module.css';

const WinMessage = () => {
  const { wrapper, title, message } = styles;
  const { score, maximumPoints } = store.getState();

  return (
    <div className={`jumbotron ${wrapper}`}>
      <h2 className={title}>Поздравляем,</h2>
      <p className={message}>
        Вы набрали {score} баллов из {maximumPoints}!
      </p>
    </div>
  );
};

export default WinMessage;
