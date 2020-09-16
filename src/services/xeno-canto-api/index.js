/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-destructuring */

import { noCors, apiBase, page } from './constants';

class XenoCantoApi {
  async getData(req, signal) {
    const res = await fetch(`${noCors}${apiBase}${req}${page}`, { signal });
    const data = await res.json();

    const transformedData = this.transformData(data);
    return transformedData;
  }

  transformData(data) {
    const PAGE_RESULTS = 1;

    const { en, gen, sp, file, id, url } = data.recordings[PAGE_RESULTS];

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
