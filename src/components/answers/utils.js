import store from '../../store';

const toggleClassName = (event) => {
  const { isAnswerCorrect, isContentLoading } = store.getState();

  if (isContentLoading) {
    return;
  }

  event.target.classList.remove('btn-info');

  if (isAnswerCorrect) {
    event.target.classList.add('btn-success');
  } else {
    event.target.classList.add('btn-danger');
  }
};

export default toggleClassName;
