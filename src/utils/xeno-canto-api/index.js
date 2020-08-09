class XenoCantoApi {
  apiBase = 'https://www.xeno-canto.org/api/2/recordings?query=goose';

  async getData(req) {
    this.req = req;

    const res = await fetch(`http://localhost:8000/query/${this.req}`);
    const data = await res.json();

    return data;
  }
}

export default XenoCantoApi;
