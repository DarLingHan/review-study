function throttle(fn, delay) {
    let timer = null
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                fn()
                timer = null
            }, delay)
        }
    }
}

function doTh () {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    console.log('当前位置', scrollTop)
}
window.onscroll = throttle(doTh, 1000)

