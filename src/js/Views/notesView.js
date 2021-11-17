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
    const markups = data.notes.map((note) => {
      return `
      <div class="note">
        ${note.note}
        <footer class="note-footer">
          <p>${note.date}</p>
          <div class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" class="delete-note-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
        </footer>
      </div>
      `;
    });
    const noteElements = Array.from(this._parentEl.querySelectorAll(".note"));
    noteElements.forEach((noteEl) => this._parentEl.removeChild(noteEl));
    markups.forEach((markup) => {
      this._noteForm.insertAdjacentHTML("beforebegin", markup);
    });
  }

  renderNote(note) {
    if (!note) return;
    const markup = `
    <div class="note">
        ${note.note}
        <footer class="note-footer">
          <p>${note.date}</p>
          <div class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" class="delete-note-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
        </footer>
      </div>
    `;
    this._noteForm.insertAdjacentHTML("beforebegin", markup);
    this._formTextarea.value = "";
  }

  getTextAreaElement() {
    return this._parentEl.querySelector("textarea");
  }
}

export default new NotesView();
