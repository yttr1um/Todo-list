import "./styles.css";

const sidebar = document.querySelector(".sidebar");

function addProject(name) {
    const project = document.createElement("div");
    project.textContent = name;
    project.classList.add('project');
    sidebar.appendChild(project);
}

addProject('default');