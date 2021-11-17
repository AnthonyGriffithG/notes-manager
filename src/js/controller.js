import * as model from "./model.js";
import categoryView from "./Views/CategoryView.js";
import notesView from "./Views/notesView.js";
import searchView from "./Views/searchView.js";

const controlAddCategory = function (newCategory) {
  try {
    // 1) add new category
    model.addCategory(newCategory);

    // 2) render category
    categoryView.render(model.state.currentCategory);

    // 3) render notes
    notesView.renderCategory(model.state.currentCategory);
  } catch (err) {
    console.log("Ya existe esa categoria");
  }
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
  const newNote = model.state.currentCategory.notes.slice(-1)[0];
  notesView.renderNote(newNote);
};

const controlSearchNotes = function (query) {
  // 1) search for results
  model.searchNotes(query);
  // 2) render them
  notesView.renderCategory(model.state.search);
};

const controlDeleteNote = function (noteID) {
  // 1) delete the note
  model.deleteNote(noteID);
};
const init = function () {
  categoryView._data = model.state;
  notesView._deleteHandler = controlDeleteNote;
  categoryView.addHandlerCreateCategory(controlAddCategory);
  categoryView.addRenderCategoryHandler(controlCategoryClick);
  notesView.renderCategory(model.state.currentCategory);
  notesView.addNewNoteHandler(controlAddNote);
  searchView.addHandlerSearch(controlSearchNotes);
};
init();
