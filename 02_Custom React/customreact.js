function customRender(reactElement, container){
    /*
        // It is not the optimized method
        const domElement = document.createElement(reactElement.type)
        domElement.innerHTML = reactElement.children
        domElement.setAttribute('href', reactElement.props.href)
        domElement.setAttribute('target', reactElement.props.target)

        container.appendChild(domElement)
    */
    
    // Best optimized method
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop=="children")
            continue
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    console.log(domElement);
    
    container.appendChild(domElement)
}

const reactElement = { // It is going store the 'a' in the tree format
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById("root")

customRender(reactElement, mainContainer)