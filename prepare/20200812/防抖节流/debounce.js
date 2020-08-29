// 防抖

function debounce (fn, delay) {
    let timer = null
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}

function doTh () {
    console.log('防抖')
}
window.addEventListener('onscroll', debounce(doTh, 2000))
