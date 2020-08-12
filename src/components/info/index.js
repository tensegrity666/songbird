/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';

import XenoCantoApi from '../../utils/xeno-canto-api';

import { getInfo } from '../../data';

import styles from './index.module.css';

class Info extends Component {
  xenoCantoApi = new XenoCantoApi();

  state = {
    name: '',
    latinName: '',
    audioURL: '',
    link: '',
    description: '',
  };

  componentDidMount() {
    this.updateAudio();
    this.updateInfo(0);
  }

  updateAudio() {
    this.xenoCantoApi.getData('goose').then((audio) =>
      this.setState({
        name: audio.name,
        latinName: audio.latinName,
        audioURL: audio.audioURL,
      })
    );
  }

  updateInfo(id) {
    const info = getInfo(id, 5);
    const { link, description } = info;
    this.setState({
      link,
      description,
    });
  }

  render() {
    const { name, latinName, audioURL, description, link } = this.state;
    const {
      infoBlock,
      soundPlayer,
      image,
      container,
      cardInner,
      containerInner,
      paragraph,
    } = styles;

    return (
      <div
        className={`card border-secondary col-12 col-sm-12 col-md-9 ${infoBlock}`}>
        <div className={container}>
          <img
            className={`${image}`}
            src={`${process.env.PUBLIC_URL}${link}`}
            alt={name}
            width="400"
          />
          <div className={`card-body ${cardInner}`}>
            <h3 className="card-header">{name}</h3>
            <div className={containerInner}>
              <h5 className="card-title">{latinName}</h5>
              <audio className={soundPlayer} src={audioURL} controls />
              <p className={`card-text ${paragraph}`}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
