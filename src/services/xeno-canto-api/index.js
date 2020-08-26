/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-destructuring */

import { noCors, apiBase, page } from './constants';

class XenoCantoApi {
  async getData(req) {
    const res = await fetch(`${noCors}${apiBase}${req}${page}`);
    const data = await res.json();

    const transformedData = this.transformData(data);
    return transformedData;
  }

  transformData(data) {
    const { en, gen, sp, file, id } = data.recordings[0];

    return {
      questionID: id,
      rusName: en,
      latinName: `${gen} ${sp}`,
      audioURL: file,
    };
  }
}

export default XenoCantoApi;
