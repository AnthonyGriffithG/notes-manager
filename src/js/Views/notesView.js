class NotesView {
  _parentEl = document.getElementById("notes");
  _btnAddNote = this._parentEl.querySelector(".add-note");

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
}

export default new NotesView();
