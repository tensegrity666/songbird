const initialState = {
  isContentLoading: false,
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
