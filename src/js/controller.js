import * as model from "./model.js";
import categoryView from "./Views/CategoryView.js";
import notesView from "./Views/notesView.js";
const controlAddCategory = function (newCategory) {
  // 1) add new category
  model.addCategory(newCategory);

  // 2) render category
  categoryView.render(model.state.currentCategory);

  // 3) render notes
  notesView.renderCategory(model.state.currentCategory);
};

const controlCategoryClick = function (categoryName) {
  // 1) search category
  model.changeCategory(categoryName);

  // 2) render it
  notesView.renderCategory(model.state.currentCategory);
};

const controlAddNote = function (note) {
  // 1) add note to the current category
  model.addNote(note);

  // 2) render it
  notesView.renderNote(note);
};
const init = function () {
  categoryView.addHandlerCreateCategory(controlAddCategory);
  categoryView.addRenderCategoryHandler(controlCategoryClick);
  notesView.renderCategory(model.state.currentCategory);
  notesView.addNewNoteHandler(controlAddNote);
};
init();
