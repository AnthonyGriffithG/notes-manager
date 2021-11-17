class NotesView {
  _parentEl = document.getElementById("notes");
  _btnAddNote = this._parentEl.querySelector(".submit-note");
  _formTextarea = this._parentEl.querySelector("textarea");
  _noteForm = this._parentEl.querySelector(".new-note-form");
  _data;

  addNewNoteHandler(handler) {
    this._noteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = this._formTextarea.value;
      handler(text);
    });
  }

  renderCategory(data) {
    this._data = data;
    console.log(data);
    const markup = data.notes
      .map((note) => {
        return `
      <div class="note">${note}</div>
      `;
      })
      .join("");
    const noteElements = Array.from(this._parentEl.querySelectorAll(".note"));
    noteElements.forEach((noteEl) => this._parentEl.removeChild(noteEl));
    this._noteForm.insertAdjacentHTML("beforebegin", markup);
  }

  renderNote() {
    const note = this._data.notes.slice(-1);
    const markup = `
    <div class="note"><p>${note}<p></div>
    `;
    this._noteForm.insertAdjacentHTML("beforebegin", markup);
    this._formTextarea.value = "";
  }

  getTextAreaElement() {
    return this._parentEl.querySelector("textarea");
  }
}

export default new NotesView();
