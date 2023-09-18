class NewsCard extends HTMLElement {
    constructor() {
        super();

        // attach shadow DOM in component
        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = "<h1>Hello world!</h1>";

        // styling components (scoped: the elements in real DOM will not be affected)
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;
            }
        `;
        shadow.appendChild(style);
    }
}

customElements.define("news-card", NewsCard);