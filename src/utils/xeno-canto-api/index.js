/* eslint-disable class-methods-use-this */

import { noCors, apiBase, page } from './constants';

class XenoCantoApi {
  async getData(req) {
    const res = await fetch(`${noCors}${apiBase}${req}${page}`);
    const data = await res.json();

    const transformedData = this.transformData(data);

    return transformedData;
  }

  transformData(data) {
    const source = data.recordings[0];
    const { en, gen, sp, file, id } = source;

    return {
      id,
      name: en,
      latinName: `${gen} ${sp}`,
      audioURL: file,
    };
  }
}

export default XenoCantoApi;
