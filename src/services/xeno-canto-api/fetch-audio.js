import { bindActionCreators } from 'redux';

import XenoCantoApi from '.';

import store from '../../store';
import * as actions from '../../redux/actions';

const { dispatch } = store;
const {
  handleErrorInRandom,
  handleErrorInDetails,
  fetchRandomSound,
  fetchDetailsSound,
} = bindActionCreators(actions, dispatch);

const fetchAudioDataRandom = (info) => {
  const xenoCantoApi = new XenoCantoApi();
  const req = info.species;

  xenoCantoApi
    .getData(req)
    .then((data) => {
      fetchRandomSound({ audioURL: data.audioURL, ...info });
    })
    .catch(() => handleErrorInRandom());
};

const fetchAudioDataDetails = (info) => {
  const xenoCantoApi = new XenoCantoApi();
  const req = info.species;

  xenoCantoApi
    .getData(req)
    .then((data) => {
      fetchDetailsSound({
        audioURL: data.audioURL,
        anchor: data.anchor,
        latinName: data.latinName,
        rusName: data.rusName,
        rusDescription: info.description,
        photo: info.link,
      });
    })
    .catch(() => handleErrorInDetails());
};

export { fetchAudioDataRandom, fetchAudioDataDetails };
