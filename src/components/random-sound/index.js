/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/media-has-caption */

import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import PlayerContainer from './player-container';
import { fetchAudioDataRandom } from '../../services/xeno-canto-api/fetch-audio';

import { hideName, randomInteger } from '../../helpers';
import styles from './index.module.css';
import { getInfo } from '../../data';

const NUMBER_OF_ANSWERS = [0, 5];
const randomIndex = randomInteger(...NUMBER_OF_ANSWERS);

const RandomSound = (state) => {
  const { playerElement, wrapper, image, audioPlayer, playerOuter } = styles;
  const {
    isAnswerCorrect,
    hasError,
    isContentLoading,
    randomAudioURL,
    randomPhoto,
    answerID,
    randomRusName,
    activeCategory,
  } = state;

  const request = useMemo(() => getInfo(activeCategory, randomIndex), []);

  useEffect(() => {
    fetchAudioDataRandom(request);
    const WAIT = 'подождите загрузки компонента...';
    console.log(`Правильный ответ: ${randomRusName || WAIT}`);
  }, [randomRusName, request]);

  const stub = '/assets/birds-photos/small.jpg';

  const errorMessage = hasError ? <ErrorMessage /> : null;

  const playerInner = (
    <>
      <img
        className={image}
        src={isAnswerCorrect ? randomPhoto : stub}
        alt={randomRusName}
        width="200"
        height="165"
        loading="lazy"
      />
      <div className={`card border-success ${playerElement}`}>
        <h4 className="card-header">
          {isAnswerCorrect ? randomRusName : hideName(randomRusName)}
        </h4>
        <div className={`card-body ${playerOuter}`}>
          <audio
            className={audioPlayer}
            src={randomAudioURL}
            preload="auto"
            controls
          />
        </div>
      </div>
    </>
  );

  return (
    <div className={wrapper} data-random={answerID} id="randomSound">
      {isContentLoading ? (
        <Spinner />
      ) : (
        <PlayerContainer errorText={errorMessage} inner={playerInner} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => state;

RandomSound.propTypes = {
  state: PropTypes.object,
};

RandomSound.defaultProps = {
  state: {},
};

export default connect(mapStateToProps)(RandomSound);
