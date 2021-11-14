class CategoryView {
  _parentEl;
  _formAddCategory;
  _errorMessage =
    "The category could not be add because it exceeds the characters limit.";
  _data;
  _addCategoryBtn;
  constructor() {
    this._parentEl = document.querySelector(".category-list");
    this._formAddCategory = document.querySelector(".new-category-form");
    this._addCategoryBtn = document.querySelector(".add-icon");
    this._addCategoryBtn.addEventListener(
      "click",
      this._showCategoryForm.bind(this)
    );
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
    this._formAddCategory.addEventListener("blur", (e) => {
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
      const categoryName = categoryBTN.textContent.trim();
      handler(categoryName);
    });
  }

  render(data) {
    if (!data) return;
    const markup = this._generateCategoryMarkup(data.name, data.index);
    this._parentEl.lastElementChild.insertAdjacentHTML("beforebegin", markup);
  }

  _generateCategoryMarkup(name, index) {
    return `
    <li class="category" data-index="${index}">
      <svg xmlns="http://www.w3.org/2000/svg" class="category-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
      <p>${name}</p>
    </li>
    `;
  }

  _showCategoryForm(e) {
    e.preventDefault();
    this._parentEl.lastElementChild.classList.toggle("hidden");
    this.getFormInput().focus();
  }
}

export default new CategoryView();
