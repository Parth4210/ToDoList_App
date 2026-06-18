// Renders the name of the app - Todo App
const appTitle = (() => {
    const title = document.createElement("h2");
    title.textContent = "Todo App";
    title.classList.add("appTitle");
    return title;
})();

export default appTitle