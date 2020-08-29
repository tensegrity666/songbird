/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/media-has-caption */

import React, { useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getInfo } from '../../data';
import { fetchAudioDataDetails } from '../../services/xeno-canto-api/fetch-audio';
import ErrorMessage from '../error-message';
import styles from './index.module.css';

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
    hasError,
    audioURL,
    rusName,
    latinName,
    rusDescription,
    photo,
  } = details;

  const request = useMemo(() => getInfo(activeCategory, selectedAnswer), [
    activeCategory,
    selectedAnswer,
  ]);

  useEffect(() => {
    fetchAudioDataDetails(request, isAnswerChecked);
  }, [request, isAnswerChecked]);

  if (!isAnswerChecked || !selectedAnswer) {
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

InfoInner.propTypes = {
  details: PropTypes.object.isRequired,
  isAnswerChecked: PropTypes.bool.isRequired,
  activeCategory: PropTypes.number.isRequired,
  selectedAnswer: PropTypes.number,
};

InfoInner.defaultProps = {
  selectedAnswer: null,
};

export default connect(mapStateToProps)(InfoInner);
