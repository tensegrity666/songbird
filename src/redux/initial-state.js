const initialState = {
  isContentLoading: false,

  initialQuestion: 1,
  selectedCategory: 0,
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

  rusName: null,
  enName: null,
  latinName: null,
  rusDescription: null,

  isButtonDisabled: false,
};

export default initialState;
