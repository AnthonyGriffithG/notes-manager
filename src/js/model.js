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
    results: [],
  },
};

export const addCategory = function (nombre) {
  // 1) check if the category already exists
  const exists = state.categories.some((category) => category.name === nombre);
  if (exists) return;

  // 2) create and add the category
  const newCategory = {
    name: nombre,
    notes: [],
  };
  state.categories.push(newCategory);

  // 3) set current category to the new one.
  state.currentCategory = newCategory;
};

export const changeCategory = function (name) {
  const category = state.categories.find((category) => category.name === name);
  state.currentCategory = category;
};

export const addNote = function (note) {
  state.currentCategory.notes.push(note);
};

const init = function () {
  state.currentCategory = state.categories[0];
};
init();
