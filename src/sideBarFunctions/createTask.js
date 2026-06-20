import { getActiveProject } from "../appState.js"
import { renderMain } from "../mainDiv.js"
import { renderProjectNames } from "../sideBarComponents/projectNamesContainer.js"
import { addTask, getProjects } from "../taskStore.js";

// Creating the dialog box for creating a task
const removeDialog = (dialog) => {
    dialog.close();
    dialog.remove();
};

//Date will be automatically added no need to ask from user
const createDialogBox = () => {
    const dialogBox = document.createElement("dialog");
    dialogBox.classList.add("taskNameDialog");
    dialogBox.innerHTML = `
        <label for='taskInput'>Enter task name:</label>
        <input type='text' id='taskInput' />
        <label for="description">Enter task description:</label>
        <input type="text" id="description" />
        <label for="notes">Enter task notes:</label>
        <input type="text" id="notes" />
        <label for="priority">Select priority of the task:</label>
        <select name="priority" id="priority">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
        </select>
        <button id='submitBtn' type='button'>Add</button>
        <button id='cancelBtn' type='button'>Cancel</button>
    `;

    document.body.appendChild(dialogBox);

    return {
        dialog: dialogBox,
        taskName: dialogBox.querySelector("#taskInput"),
        description: dialogBox.querySelector("#description"),
        notes: dialogBox.querySelector("#notes"),
        priority: dialogBox.querySelector("#priority"),
        submitBtn: dialogBox.querySelector("#submitBtn"),
        cancelBtn: dialogBox.querySelector("#cancelBtn"),
    };
};

const handleTaskSubmit = (dialog, taskName, description, notes, priority) => {
    const taskNameValue = taskName.value.trim();
    const descriptionValue = description.value.trim();
    const notesValue = notes.value.trim();
    const priorityValue = priority.value.trim();


    if (!taskNameValue) {
        taskName.focus();
        return;
    }
    const now = new Date();
    const projectName = getActiveProject();

    if (!projectName) {
        return;
    }

    const taskAdded = addTask(projectName, {
        id: `task-${Date.now()}`,
        title: taskNameValue,
        dueDate: now.toDateString(),
        description: descriptionValue,
        notes: notesValue,
        priority: priorityValue,
        isCompleted: false,
    });

    if (!taskAdded) {
        return;
    }

    renderMain(projectName);
    renderProjectNames(getProjects());

    removeDialog(dialog);
};


// Button function to add new task to the active project
const createTask = () => {
    const { dialog, taskName, description, notes, priority, submitBtn, cancelBtn } = createDialogBox();

    submitBtn.addEventListener("click", () => handleTaskSubmit(dialog, taskName, description, notes, priority));
    cancelBtn.addEventListener("click", () => removeDialog(dialog));

    dialog.showModal();
    taskName.focus();
};

export default createTask