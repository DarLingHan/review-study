function render (element, container) {
    if (typeof element === 'string' || typeof element === 'number') {
        return container.appendChild(document.createTextNode(element))
    }
    let {type, props} = element
    let ele = document.createElement(type)
    if (props.children) {
        if (!Array.isArray(props.children)) {
            props.children = [props.children]
        }
        props.children.forEach(child => {
            render(child, ele)
        });
    }
    container.appendChild(ele)
}

export default {
    render
}
