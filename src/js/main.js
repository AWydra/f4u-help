document.addEventListener("DOMContentLoaded", () => {
  const config = {
    connection: {
      categoryUrl: "app/api/getCategories.php",
      articleUrl: "app/api/getArticles.php"
    },
    sort: {
      container: "#sort",
      input: "#article-search",
      items: ".help__article",
      sortAll: "#sort-all"
    }
  };

  const otter = new Connection(config.connection);

  otter
    .init()
    .then(resp => {
      const generator = new Generator({ tabs: resp[0], articles: resp[1] });
      generator.init();
    })
    .then(() => {
      const sort = new Sort(config.sort);
      sort.init();
    })
    .then(() => {
      SEMICOLON.portfolio.filterInit();
      document.querySelector(".category__btn").click();
    })
    .catch(err =>
      Swal.fire({
        title: "Failed to load data",
        text: "Try again later or contact our support",
        type: "error"
      })
    );
});
