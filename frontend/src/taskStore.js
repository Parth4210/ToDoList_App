import { request } from "./api.js";

let projects = [];

// Returns the projects in the data
const getProjects = () => projects;

// Returns the project name from the data
const getProjectByName = (projectName) => {
    return projects.find((project) => project.name === projectName);
};

const getProjectNames = () => {
    return projects.map((project) => project.name);
};

// Function to add a project to the data - Add project button
const loadProjects = async () => {
    const data = await request("/projects");
    projects = data.projects ?? [];
    return projects;
};

const addProject = async (projectName) => {
    const project = await request("/projects", {
        method: "POST",
        body: JSON.stringify({ name: projectName }),
    });

    projects.push(project);
    return project;
};

// Add a task to a specific project - Create task button
const addTask = async (projectName, task) => {
    const project = getProjectByName(projectName);

    if (!project) {
        return false;
    }

    const savedTask = await request(`/projects/${encodeURIComponent(projectName)}/tasks`, {
        method: "POST",
        body: JSON.stringify(task),
    });

    project.tasks.push(savedTask);
    return true;
};

// Remove task from the specific project - Delete button on all tasks
const removeTask = async (projectName, taskId) => {
    const project = getProjectByName(projectName)

    if (!project) {
        return false
    }

    const index = project.tasks.findIndex((task) => task.id === taskId)

    if (index === -1) {
        return false
    }

    await request(`/projects/${encodeURIComponent(projectName)}/tasks/${encodeURIComponent(taskId)}`, {
        method: "DELETE",
    });

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
    loadProjects,
    getProjectNames,
    getProjectByName,
    addProject,
    addTask,
    getTasksForProject,
    getNumberOfTasksForProject,
    removeTask,
};
