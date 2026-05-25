import plusIcon from "./../Assets/Images/plus.png";

const sideBar = document.createElement("div");
sideBar.classList.add("sidebar");

// Renders the name of the app - Todo App
const appTitle = (() => {
    const title = document.createElement("h2");
    title.textContent = "Todo App";
    title.classList.add("appTitle");
    return title;
})();

// Renders the create task button
const renderCreateTaskBtn = (() => {
    const createTaskBtn = document.createElement("button");
    createTaskBtn.classList.add("createTaskBtn");
    createTaskBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 5v14M5 12h14" />
</svg><span>Create New Task</span>`;
    return createTaskBtn;
})();

// Renders the projects title
const projectTitle = (() => {
    const title = document.createElement("h4");
    title.innerHTML = "Projects";
    title.classList.add("projectTitle");
    return title;
})();

// Container which holds all the project names
const projectNamesContainer = (() => {
    const container = document.createElement("div");
    container.classList.add("projectNamesContainer");
    return container;
})();

// Renders the add project button
const renderAddProjectBtn = (() => {
    const btn = document.createElement("button");
    btn.classList.add("addProjectBtn");
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="7.5" width="12" height="1" fill="#5F6368"/>
    <rect x="7.5" y="2" width="1" height="12" fill="#5F6368"/>
  </svg>
  <span>Add Project</span>
`
    return btn;
})();

// Button function to add new task to the active project
const createTask = () => {
    console.log("createTask: Not yet implemented");
};

// Button function to add a project to the project sideBar
const addProject = () => {
    console.log("addProject: Not yet implemented");
};

// Wire up basic handlers
renderCreateTaskBtn.addEventListener("click", createTask);
renderAddProjectBtn.addEventListener("click", addProject);

// Renders all the content in the sideBar and returns the DOM node
sideBar.append(
    appTitle,
    renderCreateTaskBtn,
    projectTitle,
    projectNamesContainer,
    renderAddProjectBtn,
);

export default sideBar;
