class XenoCantoApi {
  apiBase = 'https://www.xeno-canto.org/api/2/recordings?query=goose';

  async getData(req) {
    const port = process.env.PORT || 8000;

    this.req = req;

    const res = await fetch(`http://localhost:${port}/query/${this.req}`);
    const data = await res.json();

    return data;
  }
}

export default XenoCantoApi;
