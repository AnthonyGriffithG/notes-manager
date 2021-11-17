class NotesView {
  _parentEl = document.getElementById("notes");
  _btnAddNote = this._parentEl.querySelector(".submit-note");
  _formTextarea = this._parentEl.querySelector("textarea");
  _noteForm = this._parentEl.querySelector(".new-note-form");
  _data;
  _deleteHandler;

  addNewNoteHandler(handler) {
    this._noteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = this._formTextarea.value;
      handler(text);
    });
  }

  renderCategory(data) {
    this._data = data;
    this._parentEl.querySelectorAll(".note").forEach((e) => e.remove());
    data.notes.forEach((note) => {
      const markup = `
      <div class="note" data-id="${note.id}">
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
      const noteElement = this._noteForm.previousElementSibling;
      const btnNote = noteElement.querySelector(".delete-note-icon");
      btnNote.addEventListener("click", (event) => {
        event.preventDefault();
        this._deleteHandler(note.id);
        noteElement.style.opacity = "0";
        setTimeout(function () {
          noteElement.remove();
        }, 1000);
      });
    });
  }

  renderNote(note) {
    if (!note) return;
    const markup = `
    <div class="note" data-id="${note.id}">
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
    const noteElement = this._noteForm.previousElementSibling;
    const btnNote = noteElement.querySelector(".delete-note-icon");
    btnNote.addEventListener("click", (event) => {
      event.preventDefault();
      this._deleteHandler(note.id);
      noteElement.style.opacity = "0";
      setTimeout(function () {
        noteElement.remove();
      }, 1000);
    });
    this._formTextarea.value = "";
  }

  addHandlerDelete(handler) {
    this._deleteHandler = handler;
  }

  getTextAreaElement() {
    return this._parentEl.querySelector("textarea");
  }
}

export default new NotesView();
