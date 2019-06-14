class Sort {
  constructor(sort) {
    this._sortBtns = document.querySelectorAll("[data-sort]");
    this._sortAll = document.querySelector(`${sort.sortAll}`);
    this._sortContainer = document.querySelector(`${sort.container}`);
    this._sortInput = document.querySelector(`${sort.input}`);
    this._iso = new Isotope(this._sortContainer, {
      itemSelector: `${sort.items}`,
      layoutMode: "fitRows"
    });
  }

  _onClick() {
    this._sortBtns.forEach(el => {
      el.addEventListener("click", ev => {
        const value = ev.target.dataset.sort;

        this._iso.arrange({ filter: value });
        this._sortInput.value = "";
      });
    });
  }

  _onInput() {
    this._sortInput.addEventListener("keyup", ev => {
      const value = ev.target.value.toLowerCase();

      document.querySelector(".activeFilter").classList.remove("activeFilter");
      this._sortAll.classList.add("activeFilter");

      if (ev.keyCode === 13) {
        this._sortContainer.scrollIntoView({
          behavior: "smooth"
        });

        setTimeout(() => this._sortInput.blur(), 500);
        return;
      }

      if (value) this._iso.arrange({ filter: `[data-title*="${value}"]` });
      else this._iso.arrange({ filter: `*` });
    });
  }

  init() {
    this._onClick();
    this._onInput();
  }
}
