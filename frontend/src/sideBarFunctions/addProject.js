import { renderProjectNames } from "../sideBarComponents/projectNamesContainer.js";
import { addProject as addProjectToStore, getProjects, loadProjects } from "../taskStore.js";

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

const handleProjectSubmit = async (dialog, input) => {
    const projectName = input.value.trim();

    if (!projectName) {
        input.focus();
        return;
    }

    try {
        await addProjectToStore(projectName);
        renderProjectNames(getProjects());
        removeDialog(dialog);
    } catch (error) {
        console.error(error);
    }
};

const addProject = () => {
    const { dialog, input, submitBtn, cancelBtn } = createDialogBox();

    submitBtn.addEventListener("click", () => handleProjectSubmit(dialog, input));
    cancelBtn.addEventListener("click", () => removeDialog(dialog));

    dialog.showModal();
    input.focus();
};

export const initializeDefaultProjects = async () => {
    try {
        await loadProjects();
    } catch (error) {
        console.error(error);
    }
    renderProjectNames(getProjects());
};

export default addProject;