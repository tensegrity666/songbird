/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import XenoCantoApi from '../../utils/xeno-canto-api';
import Spinner from '../spinner';

import { getInfo } from '../../data';
import randomizer from './helpers';

import styles from './index.module.css';

class RandomSound extends Component {
  xenoCantoApi = new XenoCantoApi();

  randomIndex = randomizer(0, 5);

  info = getInfo(0, this.randomIndex);

  state = {
    audioURL: '',
    isLoading: true,
    isGuessed: false,
  };

  req = this.info.species;

  componentDidMount() {
    this.updateAudio();
  }

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

  hideName = (name) => {
    return name.replace(/./gm, '⚹');
  };

  render() {
    const { audioURL, isLoading, isGuessed } = this.state;
    const { link, name } = this.info;
    const { playerContayner, playerElement, wrapper, image } = styles;

    return (
      <div className={`jumbotron ${wrapper}`}>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={playerContayner}>
            <img className={image} src={link} alt={name} width="200" />
            <div className={`card border-success ${playerElement}`}>
              <h4 className="card-header">
                {isGuessed ? name : this.hideName(name)}
              </h4>
              <div className="card-body">
                <audio src={audioURL} controls />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default RandomSound;
