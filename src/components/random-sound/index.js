/* eslint-disable jsx-a11y/media-has-caption */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import PlayerContainer from './player-container';

import useBirdInfo from '../hooks/use-bird-info';

import { hideName, randomInteger } from '../../helpers';
import styles from './index.module.css';
import { getInfo } from '../../data';

const NUMBER_OF_ANSWERS = [0, 5];
const randomIndex = randomInteger(...NUMBER_OF_ANSWERS);

const RandomSound = ({ isAnswerCorrect }) => {
  const { playerElement, wrapper, image, audioPlayer, playerOuter } = styles;

  const info = getInfo(0, randomIndex);
  const req = info.species;

  const { audioURL, isContentLoading, hasError, link, name, id } = useBirdInfo(
    req,
    info
  );

  // eslint-disable-next-line no-console
  useEffect(() => console.log(`Правильный ответ: ${name}`), [name]);

  const stub = '/assets/birds-photos/small.jpg';

  const errorMessage = hasError ? <ErrorMessage /> : null;

  const playerInner = (
    <>
      <img
        className={image}
        src={isAnswerCorrect ? link : stub}
        alt={name}
        width="200"
        height="165"
      />
      <div className={`card border-success ${playerElement}`}>
        <h4 className="card-header">
          {isAnswerCorrect ? name : hideName(name)}
        </h4>
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
    <div className={wrapper} data-random={id} id="randomSound">
      {isContentLoading ? (
        <Spinner />
      ) : (
        <PlayerContainer errorText={errorMessage} inner={playerInner} />
      )}
    </div>
  );
};

const mapStateToProps = ({ isAnswerCorrect }) => {
  return { isAnswerCorrect };
};

RandomSound.propTypes = {
  isAnswerCorrect: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(RandomSound);
