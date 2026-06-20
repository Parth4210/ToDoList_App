import { getNumberOfTasksForProject } from "../taskStore.js";


// Container which holds all the project names
const projectNamesContainer = (() => {
    const container = document.createElement("div");
    container.classList.add("projectNamesContainer");
    return container;
})();

export const createProjectButton = (projectName) => {
    const projectBtn = document.createElement("button");
    projectBtn.classList.add("projectNameButton");
    projectBtn.dataset.projectName = projectName.name;
    const currentTasks = getNumberOfTasksForProject(projectName.name)
    projectBtn.innerHTML = `
        <p>${projectName.name}</p>
        <p>${currentTasks}</p>
    `;
    return projectBtn;
};

export const    renderProjectNames = (projects) => {
    projectNamesContainer.replaceChildren();

    projects.forEach((projectName) => {
        projectNamesContainer.appendChild(createProjectButton(projectName));
    });
};


export default projectNamesContainer;