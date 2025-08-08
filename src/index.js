import "./styles/styles.css";
import "./styles/notes.css";
import "./styles/sidebar.css";

import { addNoteBtn, createNote} from "./notes";

const sidebar = document.querySelector(".sidebar");
const addPrjBtn = document.querySelector(".add-project-btn");

const projects = Array.from(document.querySelectorAll('.project'));
let i = 0;

function addProject(name) {
    if (i < projects.length) {
        if (projects[i].textContent.length == 0) {
            projects[i].textContent = "----- " + name;
            i = i + 1;
        }
    }

    else {
        alert("no");
    }
}

addPrjBtn.addEventListener("click", () => {
    let name = prompt("Add project name: ");
    addProject(name);
});

addNoteBtn.addEventListener("click", () => {
    createNote();
});

addProject('default');