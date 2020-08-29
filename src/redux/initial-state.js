const initialState = {
  isContentLoading: true,
  hasError: false,

  score: 0,

  isAnswerCorrect: false,
  initialScorePointsPerCategory: 10,
  scorePointsIfWrong: 5,
  maximumPoints: 60,
  hasAnswer: false,

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

  audioURL: null,
  rusName: null,
  latinName: null,
  rusDescription: null,
  photo: null,

  isNextLevelButtonDisabled: true,

  details: {
    hasError: false,
    audioURL: null,
    rusName: null,
    latinName: null,
    rusDescription: null,
    photo: null,
  },
};

export default initialState;
