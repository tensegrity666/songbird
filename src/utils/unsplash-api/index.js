/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
class UnsplashImageApi {
  link = 'https://api.unsplash.com/search/photos?client_id=';

  token = '5LbA3d94_GbVouP2exQl4umC4TPsuqbbsG4YX-e26OM';

  params = '&per_page=1&orientation=portrait&content_filter=high&query=';

  startPage = '&page=';

  async getData(req, page) {
    const res = await fetch(
      `${this.link}${this.token}${this.params}${req}${this.startPage}${page}`
    );
    const data = await res.json();

    const transformedData = this.transformData(data);

    return transformedData;
  }

  transformData(data) {
    this.source = data.results[0];
    const { alt_description, links } = this.source;

    return {
      imgPath: links.download,
      alt: alt_description,
    };
  }
}

export default UnsplashImageApi;
