import React from 'react';

import styles from './index.module.css';

const SoundPlayer = () => {
  const { playerContayner, playerElement, wrapper } = styles;

  return (
    <div className={`jumbotron ${wrapper}`}>
      <div className={playerContayner}>
        <img alt="imagewdwd" width="200" height="200" />
        <div className={`card border-success ${playerElement}`}>
          <h4 className="card-header">{}</h4>
          <div className="card-body">
            <p className="card-text">player content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundPlayer;
