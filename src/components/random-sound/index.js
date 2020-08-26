/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';

import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import PlayerContainer from './player-container';

import useBirdInfo from './use-bird-info';
import { hideName } from './helpers';
import styles from './index.module.css';

const RandomSound = () => {
  const { playerElement, wrapper, image, audioPlayer, playerOuter } = styles;

  const {
    audioURL,
    isLoading,
    isGuessed,
    error,
    link,
    name,
    id,
  } = useBirdInfo();

  const errorMessage = error ? <ErrorMessage /> : null;

  const playerInner = (
    <>
      <img className={image} src={link} alt={name} width="200" height="165" />
      <div className={`card border-success ${playerElement}`}>
        <h4 className="card-header">{isGuessed ? name : hideName(name)}</h4>
        <div className={`card-body ${playerOuter}`}>
          <audio
            className={audioPlayer}
            src={audioURL}
            preload="auto"
            controls
          />
        </div>
      </div>
    </>
  );

  return (
    <div className={wrapper} data-random={id} id="randomSound">
      {isLoading ? (
        <Spinner />
      ) : (
        <PlayerContainer errorText={errorMessage} inner={playerInner} />
      )}
    </div>
  );
};

export default RandomSound;
