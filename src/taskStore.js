import taskData from "./taskData.json";

// Returns the projects in the data
const getProjects = () => taskData.projects;

// Returns the project name from the data
const getProjectByName = (projectName) => {
    return taskData.projects.find((project) => project.name === projectName);
};

const getProjectNames = () => {
    return taskData.projects.map((project) => project.name);
};

// Function to add a project to the data - Add project button
const addProject = (projectName) => {
    taskData.projects.push({
        name: projectName,
        tasks: [],
    });
};

// Add a task to a specific project - Create task button
const addTask = (projectName, task) => {
    const project = getProjectByName(projectName);

    if (!project) {
        return false;
    }

    project.tasks.push(task);
    return true;
};

// Remove task from the specific project - Delete button on all tasks
const removeTask = (projectName, taskId) => {
    const project = getProjectByName(projectName)

    if (!project) {
        return false
    }

    const index = project.tasks.findIndex((task) => task.id === taskId)

    if (index === -1) {
        return false
    }

    project.tasks.splice(index, 1)
    return true
}

// Returns all the tasks from the specified project
const getTasksForProject = (projectName) => {
    const project = getProjectByName(projectName);

    return project ? project.tasks : [];
};

// Returns the numbers of tasks in a specific project
const getNumberOfTasksForProject = (projectName) => {
    const project = getProjectByName(projectName)

    return project ? project.tasks.length : 0
}

export {
    getProjects,
    getProjectNames,
    getProjectByName,
    addProject,
    addTask,
    getTasksForProject,
    getNumberOfTasksForProject,
    removeTask,
};
