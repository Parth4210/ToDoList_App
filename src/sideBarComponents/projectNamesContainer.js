// Container which holds all the project names
const projectNamesContainer = (() => {
    const container = document.createElement("div");
    container.classList.add("projectNamesContainer");
    return container;
})();

export const createProjectButton = (projectName) => {
    const projectBtn = document.createElement("button");
    projectBtn.classList.add("projectNameButton");
    projectBtn.innerHTML = `
        <p>${projectName}</p>
        <p>0</p>
    `;
    return projectBtn;
};

export const renderProjectNames = (projects) => {
    projectNamesContainer.replaceChildren();

    projects.forEach((projectName) => {
        projectNamesContainer.appendChild(createProjectButton(projectName));
    });
};

export default projectNamesContainer;