class Connection {
  constructor(conf) {
    this._categoryUrl = conf.categoryUrl;
    this._articleUrl = conf.articleUrl;
  }

  _get(url) {
    return new Promise((resolve, reject) => {
      return fetch(url)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => reject(new Error(`Failed to load data: ${err}`)));
    });
  }

  _getCategories() {
    return this._get(this._categoryUrl);
  }

  _getArticles() {
    return this._get(this._articleUrl);
  }

  init() {
    return Promise.all([this._getCategories(), this._getArticles()]);
  }
}
