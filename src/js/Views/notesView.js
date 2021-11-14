class NotesView {
  _parentEl = document.getElementById("notes");
  _btnAddNote = this._parentEl.querySelector(".add-note");
  newNoteHandler;
  constructor() {
    this._btnAddNote.addEventListener("click", this.addNoteHandler.bind(this));
  }

  addNoteHandler(event) {
    event.preventDefault();
    const form = this._parentEl.querySelector(".new-note-form");
    if (form) return;
    const markup = `
    <form class="new-note-form">
          <textarea placeholder="Add your note's text"></textarea>
    </form>
    `;
    this._btnAddNote.insertAdjacentHTML("beforebegin", markup);

    const noteFormEl = this._parentEl.querySelector(".new-note-form");
    const noteText = this.getTextAreaElement().value.trim();
    noteFormEl.addEventListener("submit", (e) => {
      e.preventDefault();
      this._parentEl.removeChild(noteFormEl);
      handler(noteText);
    });
  }

  renderCategory(data) {
    const markup = data.notes
      .map((note) => {
        return `
      <div class="note">${note}</div>
      `;
      })
      .join("");
    const noteElements = Array.from(this._parentEl.querySelectorAll(".note"));
    noteElements.forEach((noteEl) => this._parentEl.removeChild(noteEl));
    this._btnAddNote.insertAdjacentHTML("beforebegin", markup);
  }

  renderNote() {}

  getTextAreaElement() {
    return this._parentEl.querySelector("textarea");
  }
}

export default new NotesView();
