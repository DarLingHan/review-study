// 防抖

function debounce (fn, delay) {
    let timer = null
    return () => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(fn, delay)
    }
}
function doTh () {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    console.log('当前位置', scrollTop)
}
window.onscroll = debounce(doTh, 1000)

// 短时间内连续触发的事件，防抖可以让在某个时间期限内事件函数只执行一次ss
