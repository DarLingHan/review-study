function createElement (type, config, children) {
    let props = {}
    for (let i in config) {
        props[i] = config[i]
    }
    let childLength = arguments.length - 2
    if (childLength === 1) {
        props.children = children
    } else if (childLength > 1) {
        props.children = Array.from(arguments).slice(2)
    }

    return {
        type, props
    }

}

export default {
    createElement
}