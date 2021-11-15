class CategoryView {
  _parentEl;
  _formAddCategory;
  _errorMessage =
    "The category could not be add because it exceeds the characters limit.";
  _data;
  _addCategoryBtn;
  constructor() {
    this._parentEl = document.querySelector(".category-list");
    this._formAddCategory = document.getElementById("new-category-form");
    this._addCategoryBtn = document.querySelector(".add-icon");
    this._addCategoryBtn.addEventListener("click", this._showForm.bind(this));
    this.getFormInput().addEventListener("blur", this._hideForm.bind(this));
  }

  getQuery() {
    const query = this._parentEl.querySelector(".new-category").value;
    return query;
  }

  getFormInput() {
    return this._parentEl.querySelector(".new-category");
  }

  addHandlerCreateCategory(handler) {
    if (!this._formAddCategory) return;
    this._formAddCategory.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = this.getQuery();
      this._parentEl.lastElementChild.classList.toggle("hidden");
      if (!query) return;
      this.getFormInput().value = "";
      handler(query);
    });
  }

  addRenderCategoryHandler(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const categoryBTN = e.target.closest(".category");
      if (!categoryBTN) return;
      this._parentEl.querySelector(".current").classList.remove("current");
      categoryBTN.classList.add("current");
      const categoryName = categoryBTN.textContent.trim();
      handler(categoryName);
    });
  }

  render(data) {
    if (!data) return;
    this._data = data;
    const markup = this._generateCategoryMarkup(data.name);
    this._parentEl.querySelector(".current").classList.remove("current");
    this._parentEl.lastElementChild.insertAdjacentHTML("beforebegin", markup);
  }

  _generateCategoryMarkup(name) {
    return `
    <li class="category current">
      <svg xmlns="http://www.w3.org/2000/svg" class="category-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
      <p>${name}</p>
    </li>
    `;
  }

  _showForm(e) {
    e.preventDefault();
    this._parentEl.lastElementChild.classList.remove("hidden");
    this.getFormInput().focus();
  }
  _hideForm(e) {
    e.preventDefault();
    this._parentEl.lastElementChild.classList.add("hidden");
    this.getFormInput().value = "";
  }
}

export default new CategoryView();
