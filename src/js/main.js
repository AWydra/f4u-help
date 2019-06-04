document.addEventListener("DOMContentLoaded", () => {
  const config = {
    connection: {
      categoryUrl: "//fastcast4u.com/help2/app/api/getCategories.php",
      articleUrl: "//fastcast4u.com/help2/app/api/getArticles.php"
    },
    sort: {
      container: "#sort",
      input: "#article-search",
      items: ".help__article"
    }
  };

  const otter = new Connection({
    categoryUrl: config.connection.categoryUrl,
    articleUrl: config.connection.articleUrl
  });

  otter
    .init()
    .then(resp => {
      const generator = new Generator({ tabs: resp[0], articles: resp[1] });
      generator.init();
    })
    .then(() => {
      const sort = new Sort({
        container: config.sort.container,
        input: config.sort.input,
        items: config.sort.items
      });
      sort.init();
    })
    .then(() => {
      SEMICOLON.portfolio.filterInit();
    });
});
