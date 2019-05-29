class Connection {
  constructor(obj) {
    this._categoryUrl = obj.categoryUrl;
    this._articleUrl = obj.articleUrl;
  }

  get(url) {
    return new Promise(resolve => {
      return fetch(url)
        .then(response => response.json())
        .then(json => resolve(json));
    });
  }

  getCategories(url) {
    return this.get(url);
  }

  getArticles(url) {
    return this.get(url);
  }

  init() {
    return Promise.all([
      this.getCategories(this._categoryUrl),
      this.getArticles(this._articleUrl)
    ]).then(resp => {
      console.log(resp);
    });
  }
}
