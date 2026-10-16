let activeProject = null

const setActiveProject = (projectName) => {
    activeProject = projectName
}

const getActiveProject = () => activeProject

export { getActiveProject, setActiveProject }