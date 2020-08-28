import { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import XenoCantoApi from '../../services/xeno-canto-api';
import { handleError, fetchRandomSound } from '../../redux/actions';
import store from '../../store';

const getBirdVoice = (latinName) => {
  const xenoCantoApi = new XenoCantoApi();

  return xenoCantoApi.getData(latinName).then((audio) => audio);
};

const useRequest = (request) => {
  useEffect(() => {
    // let isCancelled = false;
    request()
      .then((data) => {
        fetchRandomSound({
          audioURL: data.audioURL,
        });
      })
      .catch(() => handleError());

    // return () => {
    //   isCancelled = true;
    // };
  }, [request]);

  return store.getState();
};

const useBirdInfo = (req) => {
  const request = useCallback(() => getBirdVoice(req), [req]);

  return useRequest(request);
};

const mapStateToProps = ({ activeCategory, selectedAnswer }) => {
  return { activeCategory, selectedAnswer };
};

const mapDispatchToProps = { handleError, fetchRandomSound };

export default connect(mapStateToProps, mapDispatchToProps)(useBirdInfo);
