export const state = {
  currentCategory: {},
  categories: [
    {
      name: "Reminders",
      notes: [],
      index: 0,
    },
    {
      name: "Notes",
      notes: [],
      index: 1,
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
    index: state.categories.length,
  };
  state.categories.push(newCategory);

  // 3) set current category to the new one.
  state.currentCategory = newCategory;
};

export const findCategory = function (categoryName) {
  return state.categories.find((category) => category.name === categoryName);
};

export const addNote = function (note) {
  state.currentCategory.notes.push(note);
};

const init = function () {
  state.currentCategory = state.categories[0];
};
init();
