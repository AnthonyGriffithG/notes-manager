class SearchView {
  parentEl = document.getElementById("search-bar");
  inputEl = this.parentEl.querySelector("#search");
  searchBTN = this.parentEl.querySelector(".search-icon");
  deleteQuery = this.parentEl.querySelector(".delete-search-icon");
  constructor() {
    this.deleteQuery.addEventListener("click", (event) => {
      event.preventDefault();
      this.inputEl.value = "";
    });
  }

  getSearchText() {
    return this.inputEl.value;
  }

  addHandlerSearch(handler) {
    this.parentEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = this.getSearchText();
      handler(query);
    });
    this.searchBTN.addEventListener("click", (event) => {
      event.preventDefault();
      const query = this.getSearchText();
      handler(query);
    });
  }
}

export default new SearchView();
