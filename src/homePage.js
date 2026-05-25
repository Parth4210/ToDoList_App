import sideBar from "./sideBar.js"
import mainDiv from "./mainDiv.js"

// getting the root element to add the content
const root = document.querySelector("#content")

const homePage = (() => {
    
    // Adds the sideBar and main to the homePage
    root.appendChild(sideBar)
    root.appendChild(mainDiv)
})()

export default homePage
export {root}