//TODO: there has to be a better way
import { addNoteBtn, openModal, closeModalBtn, closeModal, title, text } from "./modal";

import "./styles/styles.css";
import "./styles/modal.css";

const sidebar = document.querySelector(".sidebar");
const addPrjBtn = document.querySelector(".add-project-btn");

const notes = document.querySelector(".notes");
const openModalBtn = document.querySelector(".main-content > button");

function addProject(name) {
    const project = document.createElement("div");
    project.textContent = name;
    project.classList.add('project');
    sidebar.appendChild(project);
}

function createNote() {
    const colors = ["#FB64B6", "#21BCFF", "#FFDF20", "#7CCF35"];
    const randIndex = Math.floor(Math.random() * 4);

    const note = document.createElement("div");
    note.classList.add("note");
    note.style.backgroundColor = colors[randIndex];

    const noteTitle = document.createElement("h3");
    noteTitle.textContent = title.value;

    const noteText = document.createElement("p");
    noteText.textContent = text.value;

    note.appendChild(noteTitle);
    note.appendChild(noteText);

    notes.appendChild(note);
}

addNoteBtn.addEventListener("click", () => {
    //TODO: let the user choose color in modal.
    createNote();

    //close the modal after inserting the note.
    closeModal();
})

//make this more organised
openModalBtn.addEventListener("click", () => {
    openModal();
});

closeModalBtn.addEventListener("click", () => {
    closeModal();
})

addPrjBtn.addEventListener("click", () => {
    let name = prompt("Add project name: ");
    addProject(name);
});
addProject('default');