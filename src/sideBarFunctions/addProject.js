import { renderProjectNames } from "../sideBarComponents/projectNamesContainer.js";
import { addProject as addProjectToStore, getProjects } from "../taskStore.js";

const removeDialog = (dialog) => {
    dialog.close();
    dialog.remove();
};

const createDialogBox = () => {
    const dialogBox = document.createElement("dialog");
    dialogBox.classList.add("projectNameDialog");
    dialogBox.innerHTML = `
        <label for='projectInput'>Enter project name:</label>
        <input type='text' id='projectInput' />
        <button id='submitBtn' type='button'>Add</button>
        <button id='cancelBtn' type='button'>Cancel</button>
    `;

    document.body.appendChild(dialogBox);

    return {
        dialog: dialogBox,
        input: dialogBox.querySelector("#projectInput"),
        submitBtn: dialogBox.querySelector("#submitBtn"),
        cancelBtn: dialogBox.querySelector("#cancelBtn"),
    };
};

const handleProjectSubmit = (dialog, input) => {
    const projectName = input.value.trim();

    if (!projectName) {
        input.focus();
        return;
    }

    addProjectToStore(projectName);
    renderProjectNames(getProjects());
    removeDialog(dialog);
};

const addProject = () => {
    const { dialog, input, submitBtn, cancelBtn } = createDialogBox();

    submitBtn.addEventListener("click", () => handleProjectSubmit(dialog, input));
    cancelBtn.addEventListener("click", () => removeDialog(dialog));

    dialog.showModal();
    input.focus();
};

export const initializeDefaultProjects = () => {
    renderProjectNames(getProjects());
};

export default addProject;