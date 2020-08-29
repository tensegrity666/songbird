/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-destructuring */

import { noCors, apiBase, page } from './constants';
import { randomInteger } from '../../helpers';

class XenoCantoApi {
  async getData(req) {
    const res = await fetch(`${noCors}${apiBase}${req}${page}`);
    const data = await res.json();

    const transformedData = this.transformData(data);
    return transformedData;
  }

  transformData(data) {
    const pageResults = randomInteger(0, 3);

    const { en, gen, sp, file, id, url } = data.recordings[pageResults];

    return {
      questionID: id,
      rusName: en,
      latinName: `${gen} ${sp}`,
      audioURL: file,
      anchor: url,
    };
  }
}

export default XenoCantoApi;
