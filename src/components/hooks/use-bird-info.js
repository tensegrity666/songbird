import { useState, useEffect, useCallback, useMemo } from 'react';

import XenoCantoApi from '../../services/xeno-canto-api';
import store from '../../store';

const getBirdVoice = (latinName) => {
  const xenoCantoApi = new XenoCantoApi();

  return xenoCantoApi.getData(latinName).then((audio) => audio);
};

const useRequest = (request, details) => {
  const state = store.getState();

  const initialState = useMemo(() => ({ ...state }), [state]);

  const [randomSound, setRandomSound] = useState(initialState);

  const onError = () => {
    setRandomSound({
      hasError: true,
      isContentLoading: false,
    });
  };

  useEffect(() => {
    let isCancelled = false;
    request()
      .then(
        (data) =>
          !isCancelled &&
          setRandomSound({
            audioURL: data.audioURL,
            isContentLoading: false,
          })
      )
      .catch(() => !isCancelled && onError());

    return () => {
      isCancelled = true;
    };
  }, [request, initialState]);

  return { ...randomSound, ...details };
};

const useBirdInfo = (req, details) => {
  const request = useCallback(() => getBirdVoice(req), [req]);

  return useRequest(request, details);
};

export default useBirdInfo;
