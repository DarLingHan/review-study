function createElement (type, config, children) {
    let props = {}
    for (let i in config) {
        props[i] = config[i]
    }
    let childrenLength = arguments.length - 2
    if (childrenLength === 1) {
        props.children = children
    } else if (childrenLength > 1) {
        props.children = Array.from(arguments).slice(2)
    }
    return {
        type, props
    }
}

function render (element, container) {
    if (typeof element === 'string' || typeof element === 'number') {
        return container.appendChild(document.createTextNode(element + '测试'))
    }
    let {type, props} = element
    let ele = document.createElement(type)
    if (props.children) {
        if (!Array.isArray(props.children)) {
            props.children = [props.children]
        }
        props.children.forEach(element => {
            render(element, ele)
        });
    }
    return container.appendChild(ele)
}

export default {
    createElement,
    render
}