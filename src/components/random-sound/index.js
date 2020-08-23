/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import XenoCantoApi from '../../utils/xeno-canto-api';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';

import { getInfo } from '../../data';

import { randomInteger, hideName } from './helpers';
import PlayerContainer from './player-container';

import styles from './index.module.css';

class RandomSound extends Component {
  xenoCantoApi = new XenoCantoApi();

  randomIndex = randomInteger(0, 5);

  info = getInfo(0, this.randomIndex);

  req = this.info.species;

  state = {
    audioURL: '',
    isLoading: true,
    isGuessed: false,
    error: false,
  };

  componentDidMount() {
    this.updateAudio();
  }

  onError = () => {
    this.setState({
      error: true,
      isLoading: false,
    });
  };

  updateAudio = () => {
    this.xenoCantoApi
      .getData(this.req)
      .then((audio) =>
        this.setState({
          audioURL: audio.audioURL,
          isLoading: false,
        })
      )
      .catch(this.onError);
  };

  render() {
    const { audioURL, isLoading, isGuessed, error } = this.state;
    const { link, name, id } = this.info;

    const { playerElement, wrapper, image, audioPlayer, playerOuter } = styles;

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
  }
}

export default RandomSound;
