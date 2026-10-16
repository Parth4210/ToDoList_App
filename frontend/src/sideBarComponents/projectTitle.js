// Renders the projects title
const projectTitle = (() => {
    const title = document.createElement("h4");
    title.innerHTML = "Projects";
    title.classList.add("projectTitle");
    return title;
})();

export default projectTitle