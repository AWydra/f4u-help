class Connection {
  constructor(conf) {
    this._categoryUrl = conf.categoryUrl;
    this._articleUrl = conf.articleUrl;
  }

  _get(url) {
    return new Promise(resolve => {
      return fetch(url)
        .then(response => response.json())
        .then(json => resolve(json));
    });
  }

  _getCategories(url) {
    return this._get(url);
  }

  _getArticles(url) {
    return this._get(url);
  }

  init() {
    return Promise.all([
      this._getCategories(this._categoryUrl),
      this._getArticles(this._articleUrl)
    ]);
  }
}
