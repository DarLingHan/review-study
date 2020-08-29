function throttle (fn, delay) {
    let timer = null
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                timer = null
            }, delay);
        }
    }
}
function doTh () {
    console.log('节流')
}
window.addEventListener('scroll', throttle(doTh, 1000));

