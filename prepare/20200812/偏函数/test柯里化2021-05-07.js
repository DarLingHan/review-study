function add (x, y) {
    console.log(x + y)
}

function add2 (x) {
    return function (y) {
        console.log(x + y)
    }
}

add(3, 4)

add2(3)(4)