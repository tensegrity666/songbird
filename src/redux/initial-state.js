const initialState = {
  isContentLoading: false,

  initialQuestion: 1,
  activeCategory: 0,
  selectedAnswer: null,
  isAnswerCorrect: false,

  isPlayerWin: false,
  isGameFinished: false,

  questionRequest: null,
  detailsRequest: null,

  questionID: null,
  answerID: null,

  score: 0,
  initialScorePointsPerCategory: 10,
  scorePointsIfWrong: 2,
  maximumPoints: 36,

  audioURL: null,
  rusName: null,
  latinName: null,
  rusDescription: null,

  isButtonDisabled: false,
};

export default initialState;
