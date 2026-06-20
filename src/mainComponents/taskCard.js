import { getActiveProject } from "../appState.js"
import { removeTask } from "../taskStore.js"
import { renderMain } from "../mainDiv.js"
import { renderProjectNames } from "../sideBarComponents/projectNamesContainer.js"
import { getProjects } from "../taskStore.js"

const taskCard = (task) => {
    const card = document.createElement("div")
    card.classList.add("taskCard")

    const topRow = document.createElement("div")
    topRow.classList.add("taskCardTopRow")

    const leftSide = document.createElement("div")
    leftSide.classList.add("taskCardLeftSide")

    const circle = document.createElement("input")
    circle.classList.add("taskCircle")
    circle.type = "checkbox"

    const taskTitle = document.createElement("h3")
    taskTitle.textContent = task.title

    const dateAdded = document.createElement("p")
    dateAdded.classList.add("taskDate")
    dateAdded.textContent = task.dueDate

    leftSide.append(circle, taskTitle)

    const rightSide = document.createElement("div")
    rightSide.classList.add("taskCardRightSide")

    const priority = document.createElement("p")
    priority.classList.add("taskPriority")
    priority.textContent = task.priority

    

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("taskDeleteBtn")
    deleteBtn.type = "button"
    deleteBtn.textContent = "🗑"

    rightSide.append(priority, deleteBtn)

    topRow.append(leftSide, dateAdded, rightSide)

    const details = document.createElement("div")
    details.classList.add("taskDetails")

    const descriptionTitle = document.createElement("p")
    descriptionTitle.classList.add("taskDetailsTitle")
    descriptionTitle.textContent = "Description"

    const descriptionText = document.createElement("p")
    descriptionText.textContent = task.description

    const notesTitle = document.createElement("p")
    notesTitle.classList.add("taskDetailsTitle")
    notesTitle.textContent = "Notes"

    const notesText = document.createElement("p")
    notesText.textContent = task.notes

    details.append(descriptionTitle, descriptionText, notesTitle, notesText)
    details.hidden = true

    card.append(topRow, details)

    // Remove the task, then rerender the current project and sidebar counts.
    deleteBtn.addEventListener("click", () => {
        const projectName = getActiveProject()

        if (!projectName) {
            return
        }

        const taskRemoved = removeTask(projectName, task.id)

        if (!taskRemoved) {
            return
        }

        renderMain(projectName)
        renderProjectNames(getProjects())
    })

    // Adding functionality to the checkbox to make a line on the text
    circle.addEventListener("click", ()=>{
        taskTitle.classList.toggle("crossedText")
    })

    return card
}

export default taskCard 