class Sort {
  constructor(sort) {
    this._sortBtns = document.querySelectorAll("[data-sort]");
    this._sortContainer = document.querySelector(`${sort.container}`);
    this._sortInput = document.querySelector(`${sort.input}`);
    this._iso = new Isotope(this._sortContainer, {
      itemSelector: `${sort.items}`,
      layoutMode: "fitRows"
    });
  }

  init() {
    this._sortBtns.forEach(el => {
      el.addEventListener("click", ev => {
        const value = ev.target.dataset.sort;

        this._iso.arrange({ filter: value });
      });
    });

    this._sortInput.addEventListener("keyup", ev => {
      const value = ev.target.value.toLowerCase();

      if (value) this._iso.arrange({ filter: `[data-title*="${value}"]` });
      else this._iso.arrange({ filter: `*` });
    });

    this._sortInput.addEventListener(blur, ev => {
      this._iso.arrange({ filter: `*` });
    });
  }
}
