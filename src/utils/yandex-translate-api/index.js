class YandexTranslateApi {
  link =
    'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200514T113357Z.7da7410ce1f8a61f.28103d59da89aacae1b845dc43aefa4dcb7abedd&lang=ru-en&text=';

  async getData(req) {
    const res = await fetch(`${this.link}${req}`);
    const data = await res.json();

    return data;
  }

  transformData(data) {
    this.data = data;

    return this.data.split(' ').join('+');
  }
}

export default YandexTranslateApi;
