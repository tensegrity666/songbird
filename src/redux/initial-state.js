const initialState = {
  isContentLoading: false,
  hasError: false,

  score: 0,

  isAnswerCorrect: false,
  isAnswerChecked: false,
  initialScorePointsPerCategory: 10,
  scorePointsIfWrong: 5,
  maximumPoints: 60,

  isPlayerWin: false,
  isGameFinished: false,

  questionRequest: null,
  detailsRequest: null,

  activeCategory: 0,
  selectedAnswer: 0,

  questionID: null,
  answerID: null,

  audioURL: null,
  rusName: null,
  latinName: null,
  rusDescription: null,

  isNextLevelButtonDisabled: true,
};

export default initialState;
