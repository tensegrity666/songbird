/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';

import ErrorMessage from '../error-message';
import styles from './index.module.css';

const InfoInner = ({ details, selectedBird }) => {
  const {
    soundPlayer,
    image,
    container,
    cardInner,
    paragraph,
    title,
    detailsWrapper,
  } = styles;

  const { audioURL, description, link, name, error, species } = details;

  if (selectedBird) {
    return (
      <div className={container}>
        <p>Выберите птицу из меню слева</p>
      </div>
    );
  }

  const errorMessage = error ? <ErrorMessage /> : null;

  return (
    <div className={container}>
      <img
        className={`${image}`}
        src={`${process.env.PUBLIC_URL}${link}`}
        alt={name}
        width="400"
        height="350"
      />
      <div className={cardInner}>
        <h3 className="card-header">{name}</h3>
        <div className={detailsWrapper}>
          {errorMessage || (
            <>
              <div className={`card-title ${title}`}>{species}</div>
              <audio className={soundPlayer} src={audioURL} controls />
            </>
          )}
          <p className={`card-text ${paragraph}`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoInner;
