/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/media-has-caption */

import React, { useMemo } from 'react';
import { connect } from 'react-redux';

import { getInfo } from '../../data';
import ErrorMessage from '../error-message';
import styles from './index.module.css';

import store from '../../store';

const InfoInner = ({
  details,
  activeCategory,
  selectedAnswer,
  isAnswerChecked,
}) => {
  const {
    soundPlayer,
    image,
    container,
    cardInner,
    paragraph,
    title,
    detailsWrapper,
    chooseBirdWrapper,
  } = styles;

  const {
    isContentLoading,
    hasError,
    audioURL,
    rusName,
    latinName,
    rusDescription,
    photo,
  } = details;

  const request = useMemo(() => getInfo(activeCategory, selectedAnswer), []);
  // eslint-disable-next-line no-console
  console.log(request);

  if (isAnswerChecked) {
    return (
      <div className={chooseBirdWrapper}>
        <p>Выберите птицу из меню слева</p>
      </div>
    );
  }

  const errorMessage = hasError ? <ErrorMessage /> : null;

  return (
    <div className={container}>
      <img
        className={image}
        src={`${process.env.PUBLIC_URL}${photo}`}
        alt={rusName}
        width="400"
        height="350"
      />
      <div className={cardInner}>
        <h3 className="card-header">{rusName}</h3>
        <div className={detailsWrapper}>
          {errorMessage || (
            <>
              <div className={`card-title ${title}`}>{latinName}</div>
              <audio className={soundPlayer} src={audioURL} controls />
            </>
          )}
          <p className={`card-text ${paragraph}`}>{rusDescription}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  details,
  activeCategory,
  selectedAnswer,
  isAnswerChecked,
}) => {
  return { details, activeCategory, selectedAnswer, isAnswerChecked };
};

export default connect(mapStateToProps)(InfoInner);
