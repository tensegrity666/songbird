import { useState, useEffect, useCallback, useMemo } from 'react';

import XenoCantoApi from '../../services/xeno-canto-api';
import { getInfo } from '../../data';
import { randomInteger } from './helpers';

const randomIndex = randomInteger(0, 5);
const info = getInfo(0, randomIndex);

const getBirdVoice = (latinName) => {
  const xenoCantoApi = new XenoCantoApi();
  return xenoCantoApi.getData(latinName).then((audio) => audio);
};

const useRequest = (request, details) => {
  const initialState = useMemo(
    () => ({
      audioURL: '',
      isLoading: true,
      isGuessed: false,
      error: false,
    }),
    []
  );

  const [randomSound, setRandomSound] = useState(initialState);

  const onError = () => {
    setRandomSound({
      error: true,
      isLoading: false,
    });
  };

  useEffect(() => {
    setRandomSound(initialState);
    let isCancelled = false;
    request()
      .then(
        (data) =>
          !isCancelled &&
          setRandomSound({
            audioURL: data.audioURL,
            isLoading: false,
          })
      )
      .catch(() => !isCancelled && onError());

    return () => {
      isCancelled = true;
    };
  }, [request, initialState]);

  return { ...randomSound, ...details };
};

const useBirdInfo = () => {
  const req = info.species;

  const request = useCallback(() => getBirdVoice(req), [req]);

  return useRequest(request, info);
};

export default useBirdInfo;
