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

export default renderAddProjectBtn