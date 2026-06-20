import sideBar from "./sideBar.js"
import mainDiv from "./mainDiv.js"
import { renderMain } from "./mainDiv.js"
import projectNamesContainer from "./sideBarComponents/projectNamesContainer.js"
import { setActiveProject } from "./appState.js"

// getting the root element to add the content
const root = document.querySelector("#content")

const homePage = (() => {

    // Adds the sideBar and main to the homePage
    root.appendChild(sideBar)
    root.appendChild(mainDiv)
})()

// Attaching the rendering function to project buttons, including ones added later
projectNamesContainer.addEventListener("click", (event) => {
    const projectButton = event.target.closest(".projectNameButton")
    if (!projectButton) {
        return
    }
    // Here we get the projectName of the button clicked, so we'll use this to set the active project in order to add the task
    const projectName = projectButton.dataset.projectName
    setActiveProject(projectName)
    renderMain(projectName)
})

export default homePage
export { root }