/* eslint-disable jsx-a11y/media-has-caption */

import React, { useState, useEffect } from 'react';

import XenoCantoApi from '../../services/xeno-canto-api';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import PlayerContainer from './player-container';
import { getInfo } from '../../data';
import { randomInteger, hideName } from './helpers';
import styles from './index.module.css';

const RandomSound = () => {
  const { playerElement, wrapper, image, audioPlayer, playerOuter } = styles;

  const xenoCantoApi = new XenoCantoApi();

  const randomIndex = randomInteger(0, 5);

  const info = getInfo(0, randomIndex);

  const req = info.species;

  const [randomSound, setRandomSound] = useState({
    audioURL: '',
    isLoading: true,
    isGuessed: false,
    error: false,
  });

  const onError = () => {
    setRandomSound({
      error: true,
      isLoading: false,
    });
  };

  const updateAudio = () => {
    xenoCantoApi
      .getData(req)
      .then((audio) =>
        setRandomSound({
          audioURL: audio.audioURL,
          isLoading: false,
        })
      )
      .catch(onError);
  };

  useEffect(() => {
    updateAudio();
  });

  const { audioURL, isLoading, isGuessed, error } = randomSound;
  const { link, name, id } = info;

  const errorMessage = error ? <ErrorMessage /> : null;

  const playerInner = (
    <>
      <img className={image} src={link} alt={name} width="200" />
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
    <div className={`jumbotron ${wrapper}`} data-random={id} id="randomSound">
      {isLoading ? (
        <Spinner />
      ) : (
        <PlayerContainer errorText={errorMessage} inner={playerInner} />
      )}
    </div>
  );
};

export default RandomSound;
