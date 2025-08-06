const notes = document.querySelector(".notes");
export const addNoteBtn = document.querySelector(".main-content > button");

export function createNote() {
    const colors = ["#FB64B6", "#21BCFF", "#FFDF20", "#7CCF35"];
    const randIndex = Math.floor(Math.random() * 4);

    const note = document.createElement("div");
    note.classList.add("note");
    note.style.backgroundColor = colors[randIndex];

    const pin = document.createElement("div");
    pin.classList.add("pin");

    const noteTitle = document.createElement("input");
    noteTitle.placeholder = "Note title";

    const noteText = document.createElement("textarea");
    noteText.placeholder = "Enter text here...";

    note.appendChild(pin);
    note.appendChild(noteTitle);
    note.appendChild(noteText);

    notes.appendChild(note);
}