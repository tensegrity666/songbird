class XenoCantoApi {
  noCors = 'https://cors-anywhere.herokuapp.com/';

  apiBase = 'www.xeno-canto.org/api/2/recordings?query=';

  async getData(req) {
    const res = await fetch(`${this.noCors}${this.apiBase}${req}`);
    const data = await res.json();

    return data;
  }
}

export default XenoCantoApi;
