class Generator {
  constructor(conf) {
    this._tabs = conf.tabs;
    this._articles = conf.articles;
  }

  createTabs() {
    const container = document.querySelector(".category");

    this._tabs.forEach(el => {
      const li = document.createElement("li");
      li.classList.add("category__item");

      li.innerHTML = `<a href="#" class="category__btn" data-sort=".cat-${
        el.id
      }">${el.name}</a>`;

      container.appendChild(li);
    });
  }

  createArticles() {
    const container = document.querySelector("#sort");

    this._articles.forEach(el => {
      const article = document.createElement("article");

      article.classList.add(
        "help__article",
        "col-12",
        "col-md-6",
        "col-lg-4",
        `cat-${el.category_id}`
      );
      article.setAttribute("data-title", el.helpTitle.toLowerCase());
      article.innerHTML = `
                <a href="${el.id}/${el.slug}/" class="help__link">
                  <div class="help__icon-container">
                    <i class="help__icon ${el.icon}"></i>
                  </div>
                  <div class="help__title">
                    <h3 class="help__heading h3 px-3">${el.helpTitle}</h3>
                    <hr class="help__underscore">
                    <p class="help__description">
                      ${el.helpDescription}
                    </p>
                  </div>
                </a>`;
      container.appendChild(article);
    });
  }

  init() {
    this.createArticles();
    this.createTabs();
  }
}
