const initialState = {
  initialQuestion: 1,
  selectedCategory: 0,
  selectedAnswer: null,
  isAnswerCorrect: false,
  isContentLoading: true,
  isGameFinished: false,
  isPlayerWin: false,
  score: 0,
  questionRequest: null,
  detailsRequest: null,
  questionID: null,
  answerID: null,
  initialScorePointsPerCategory: 10,
  scorePointsIfWrong: 2,
  rusName: null,
  enName: null,
  latinName: null,
  rusDescription: null,
};

export default initialState;
