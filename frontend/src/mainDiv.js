import { getTasksForProject } from "./taskStore.js"
import taskCard from "./mainComponents/taskCard.js"

const mainDiv = document.createElement("div")
mainDiv.classList.add("main")


const renderMain = (projectName) => {
    mainDiv.replaceChildren()

    if (!projectName) {
        return
    }

    // Title of the project
    const projectTitle = document.createElement("h2")
    projectTitle.textContent = projectName

    // No. of tasks remaininig the project
    const projectTasks = getTasksForProject(projectName)
    const numberOfTasks = projectTasks.length
    const tasksLeft = document.createElement("p")
    tasksLeft.textContent = `${numberOfTasks} remaining`

    mainDiv.append(projectTitle, tasksLeft)

    projectTasks.forEach((task) => {
        mainDiv.appendChild(taskCard(task))
    })
}

export default mainDiv
export {renderMain}