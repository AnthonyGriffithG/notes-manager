export const state = {
  currentCategory: {
    name: "",
    notes: [],
  },
  categories: [
    {
      name: "Reminders",
      notes: [],
    },
    {
      name: "Notes",
      notes: [],
    },
  ],
  search: {
    query: "",
    notes: [],
  },
};

export const addCategory = function (name) {
  try {
    // 1) check if the category already exists
    const exists = categoryExist(name);
    if (exists) throw new Error("Categoria ya existente");
    // 2) create and add the category
    const newCategory = {
      name: name,
      notes: [],
    };
    state.categories.push(newCategory);

    // 3) set current category to the new one.
    state.currentCategory = newCategory;
    saveData();
  } catch (err) {
    throw err;
  }
};

export const changeCategory = function (name) {
  const category = state.categories.find(
    (category) => category.name.toLowerCase() === name.toLowerCase()
  );
  state.currentCategory = category;
};

export const addNote = function (note) {
  state.currentCategory.notes.push(note);
  saveData();
};

const categoryExist = function (name) {
  return state.categories.some((category) => category.name === name);
};

const saveData = function () {
  localStorage.setItem("state", JSON.stringify(state));
};
const getData = function () {
  const data = JSON.parse(localStorage.getItem("state"));

  if (!data) return;

  state.categories = data.categories;
  state.currentCategory = data.categories;
  state.search = data.search;
};

export const searchNotes = function (query) {
  const notes = state.currentCategory.notes.filter((note) =>
    note.toLowerCase().includes(query.toLowerCase())
  );
  state.search.notes = notes;
};

const init = function () {
  getData();
  state.currentCategory = state.categories[0];
};
init();
