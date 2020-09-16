const initialState = {
  isContentLoading: true,
  hasError: false,

  score: 0,

  isAnswerCorrect: false,
  initialScorePointsPerCategory: 10,
  scorePointsIfWrong: 5,
  maximumPoints: 60,
  hasAnswer: false,
  hasWrongAnswer: false,
  randomItem: null,

  isPlayerWin: false,
  isGameFinished: false,
  isLevelCompleted: false,

  questionRequest: null,
  detailsRequest: null,

  isAnswerChecked: false,
  activeCategory: 0,
  selectedAnswer: null,

  questionID: null,
  answerID: null,

  randomAudioURL: null,
  randomRusName: null,
  randomPhoto: null,

  audioURL: null,
  rusName: null,
  latinName: null,
  rusDescription: null,
  photo: null,
  anchor: null,

  isDetailsLoading: true,
  hasErrorInDetails: false,

  isNextLevelButtonDisabled: true,
};

export default initialState;
