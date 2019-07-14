function maxWidth(size, fn) {
    function bool() {
        const w = document.documentElement.clientWidth
        return w <= size
    }
    fn(bool())
    window.onresize = () => {
        fn(bool())
    }
}

function noop() {
    console.log('noop')
}

export {
    maxWidth,
    noop,
}
