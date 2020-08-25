/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/state-in-constructor */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from '../error-message';
import Spinner from '../spinner';

import XenoCantoApi from '../../utils/xeno-canto-api';
import { getInfo } from '../../data';

import styles from './index.module.css';

const Details = ({ details }) => {
  const {
    infoBlock,
    soundPlayer,
    image,
    container,
    cardInner,
    containerInner,
    paragraph,
    title,
  } = styles;

  const {
    nameEn,
    latinName,
    audioURL,
    description,
    link,
    name,
    error,
    isLoading,
  } = details;

  const [birdInfo, setbirdInfo] = useState({});

  const onError = () => {
    setbirdInfo({
      error: true,
      isLoading: false,
    });
  };

  const updateAudio = () => {
    const xenoCantoApi = new XenoCantoApi();

    const { species } = details;

    if (!species) {
      return;
    }

    xenoCantoApi
      .getData(species)
      .then((audio) =>
        setbirdInfo({
          nameEn: audio.nameEn,
          latinName: audio.latinName,
          audioURL: audio.audioURL,
          isLoading: false,
        })
      )
      .catch(onError);
  };

  const updateInfo = (categoryIndex, birdID) => {
    const newInfo = getInfo(categoryIndex, birdID);

    setbirdInfo({
      ...birdInfo,
      ...newInfo,
    });
  };

  const errorMessage = error ? <ErrorMessage /> : null;

  const infoInner = (
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
          {errorMessage || (
            <>
              <div className={`card-title ${title}`}>
                {nameEn} / {latinName}
              </div>
              <audio className={soundPlayer} src={audioURL} controls />
            </>
          )}
          <p className={`card-text ${paragraph}`}>{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`card border-secondary col-12 col-sm-12 col-md-9 ${infoBlock}`}>
      {isLoading ? <Spinner /> : infoInner}
    </div>
  );
};

Details.propTypes = {
  details: PropTypes.object,
  nameEn: PropTypes.string,
  latinName: PropTypes.string,
  audioURL: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
};

Details.defaultProps = {
  details: {},
  nameEn: '',
  latinName: '',
  audioURL: '',
  description: '',
  link: '',
  name: '',
};

export default Details;
