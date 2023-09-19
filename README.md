
# Working with web components

  

## Santander Bootcamp 2023 Fullstack Developer Java + Angular

  

In this project we built a web component from scratch using JavaScript Classes

  

## The DOM (Document Objet Model)

  

DOM is the way that our browser renders HTML documents

`index.html -> browsers parses the document -> DOM (a tree of HTML elements)`;

Sometimes render HTML using Javascript causes performance issues. This happens because the element tree can be a really complex structure, and handle with all this elements may be hard too. How can we balance this?

## The Shadow DOM and Web Components

Web components with JS uses a feature called **"Shadow DOM"**. Its basically when one of the elements in tree have a itself DOM. For example:
    
    <div id="root"></div>
    <script type="text/javascript">
	    const root = document.getElementById("root");
	    const rootShadow = root.attachShadow({mode: "open"});
		
		// Now the "root" div has his own DOM
	    rootShadow.innerHTML = "<h1>I'm a shadow DOM of root element!</h1>"
    </script>
Now, instead of modify a node and recalculate all the real DOM structure, we can use the Shadow DOM to change **exactly what we really need to change** (styles can be scoped too. Looks familiar for you? :atom_symbol:). This is the key behind web components.

And we actually can create custom elements with:
`customElements.define("selector", classWithHtmlElementConstructor)`
