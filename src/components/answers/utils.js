import store from '../../store';

const toggleClassName = (event) => {
  const { isButtonDisabled, isContentLoading } = store.getState();

  if (isContentLoading) {
    return;
  }

  event.target.classList.remove('btn-info');

  if (isButtonDisabled) {
    event.target.classList.add('btn-danger');
  } else {
    event.target.classList.add('btn-success');
  }
};

export default toggleClassName;
