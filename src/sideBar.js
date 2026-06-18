import plusIcon from "./../Assets/Images/plus.png";
import appTitle from "./sideBarComponents/appTitle.js";
import projectNamesContainer from "./sideBarComponents/projectNamesContainer.js"
import projectTitle from "./sideBarComponents/projectTitle.js"
import renderAddProjectBtn from "./sideBarComponents/renderAddProjectBtn.js"
import renderCreateTaskBtn from "./sideBarComponents/renderCreateTaskBtn.js"
import {initializeDefaultProjects} from "./sideBarFunctions/addProject.js"

import addProject from "./sideBarFunctions/addProject.js"
import createTask from "./sideBarFunctions/createTask.js"

const sideBar = document.createElement("div");
sideBar.classList.add("sidebar");

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

initializeDefaultProjects()

export default sideBar;
