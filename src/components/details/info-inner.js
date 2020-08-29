/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import ErrorMessage from '../error-message';
import styles from './index.module.css';

const InfoInner = (state) => {
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
    hasErrorInDetails,
    audioURL,
    rusName,
    latinName,
    rusDescription,
    photo,
    anchor,
    isAnswerChecked,
  } = state;

  if (!isAnswerChecked) {
    return (
      <div className={chooseBirdWrapper}>
        <p>Выберите птицу из меню слева</p>
      </div>
    );
  }

  const errorMessage = hasErrorInDetails ? <ErrorMessage /> : null;

  return (
    <div className={container}>
      <img
        className={image}
        src={`${process.env.PUBLIC_URL}${photo}`}
        alt={rusName}
        width="400"
        height="350"
        loading="lazy"
      />
      <div className={cardInner}>
        <h3 className="card-header">
          <a href={`https:${anchor}`} target="_blank" rel="noopener noreferrer">
            {rusName}
          </a>
        </h3>
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

const mapStateToProps = (state) => {
  return state;
};

// InfoInner.propTypes = {
//   state: PropTypes.object,
// };

// InfoInner.defaultProps = {
//   state: null,
// };

export default connect(mapStateToProps)(InfoInner);
