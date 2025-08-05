import "./styles.css";

const sidebar = document.querySelector(".sidebar");
const addPrjBtn = document.querySelector(".add-project-btn");

const notes = document.querySelector(".notes");
const addNoteBtn = document.querySelector(".main-content > button");

function addProject(name) {
    const project = document.createElement("div");
    project.textContent = name;
    project.classList.add('project');
    sidebar.appendChild(project);
}

function addNote(text) {
    const note = document.createElement("div");
    note.textContent = text;
    note.classList.add("note");
    notes.appendChild(note);
}

addNoteBtn.addEventListener("click", () => {
    const text = "test";
    addNote(text);
});

addPrjBtn.addEventListener("click", () => {
    let name = prompt("Add project name: ");
    addProject(name);
});

addProject('default');