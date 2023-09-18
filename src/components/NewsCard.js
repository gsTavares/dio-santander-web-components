class NewsCard extends HTMLElement {
    constructor() {
        super();

        // attach shadow DOM in component
        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = "<h1>Hello world!</h1>";
    }
}

customElements.define("news-card", NewsCard);