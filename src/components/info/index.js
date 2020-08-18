/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/state-in-constructor */

import React from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from '../error-message';
import Spinner from '../spinner';

import styles from './index.module.css';

const Info = ({ info }) => {
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
  } = info;

  const errorMessage = error ? <ErrorMessage /> : null;

  return (
    <div
      className={`card border-secondary col-12 col-sm-12 col-md-9 ${infoBlock}`}>
      {errorMessage}
      {isLoading ? (
        <Spinner />
      ) : (
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
              <div className={`card-title ${title}`}>
                {nameEn} / {latinName}
              </div>
              <audio className={soundPlayer} src={audioURL} controls />
              <p className={`card-text ${paragraph}`}>{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Info.propTypes = {
  info: PropTypes.object,
  nameEn: PropTypes.string,
  latinName: PropTypes.string,
  audioURL: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
};

Info.defaultProps = {
  info: {},
  nameEn: '',
  latinName: '',
  audioURL: '',
  description: '',
  link: '',
  name: '',
};

export default Info;
