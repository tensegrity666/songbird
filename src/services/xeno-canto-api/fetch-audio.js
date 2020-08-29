import { bindActionCreators } from 'redux';

import XenoCantoApi from '.';

import store from '../../store';
import * as actions from '../../redux/actions';

const { dispatch } = store;
const { handleError, fetchRandomSound } = bindActionCreators(actions, dispatch);

const fetchAudioData = (info, isRandom) => {
  const xenoCantoApi = new XenoCantoApi();
  const req = info.species;

  if (isRandom) {
    return xenoCantoApi
      .getData(req)
      .then((data) => {
        fetchRandomSound({ audioURL: data.audioURL, ...info });
      })
      .catch(() => handleError());
  }

  return xenoCantoApi
    .getData(req)
    .then((data) => {
      fetchRandomSound({ audioURL: data.audioURL, ...info });
    })
    .catch(() => handleError());
};

export default fetchAudioData;
