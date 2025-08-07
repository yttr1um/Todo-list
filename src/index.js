import "./styles/styles.css";
import "./styles/notes.css";
import "./styles/sidebar.css";

import { addNoteBtn, createNote} from "./notes";

//const sidebar = document.querySelector(".sidebar");
//const addPrjBtn = document.querySelector(".add-project-btn");

// function addProject(name) {
//     const project = document.createElement("div");
//     project.textContent = name;
//     project.classList.add('project');
//     sidebar.appendChild(project);
// }

// addPrjBtn.addEventListener("click", () => {
//     let name = prompt("Add project name: ");
//     addProject(name);
// });

addNoteBtn.addEventListener("click", () => {
    createNote();
});

addProject('default');