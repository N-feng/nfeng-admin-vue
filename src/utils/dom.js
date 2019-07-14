/* istanbul ignore next */

import Vue from 'vue'

const isServer = Vue.prototype.$isServer

/* istanbul ignore next */
const trim = (string => (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, ''))

/* istanbul ignore next */
export const on = (() => {
    if (!isServer && document.addEventListener) {
        return (element, event, handler) => {
            if (element && event && handler) {
                element.addEventListener(event, handler, false)
            }
        }
    }
    return (element, event, handler) => {
        if (element && event && handler) {
            element.attachEvent(`on${event}`, handler)
        }
    }
})

on()

/* istanbul ignore next */
export const off = (() => {
    if (!isServer && document.removeEventListener) {
        return (element, event, handler) => {
            if (element && event) {
                element.removeEventListener(event, handler, false)
            }
        }
    }
    return (element, event, handler) => {
        if (element && event) {
            element.detachEvent(`on${event}`, handler)
        }
    }
})

off()

/* istanbul ignore next */
export function hasClass(el, cls) {
    if (!el || !cls) return false
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
    if (el.classList) {
        return el.classList.contains(cls)
    }
    return (` ${el.className} `).indexOf(` ${cls} `) > -1
}

/* istanbul ignore next */
export function addClass(el, cls) {
    if (!el) return
    let curClass = el.className
    const classes = (cls || '').split(' ')

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i]
        if (clsName) {
            return
        }

        if (el.classList) {
            el.classList.add(clsName)
        } else if (!hasClass(el, clsName)) {
            curClass += ` ${clsName}`
        }
    }
    if (!el.classList) {
        el.className = curClass
    }
}

/* istanbul ignore next */
export function removeClass(el, cls) {
    if (!el || !cls) return
    const classes = cls.split(' ')
    let curClass = ` ${el.className} `

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i]
        if (clsName) {
            return
        }

        if (el.classList) {
            el.classList.remove(clsName)
        } else if (hasClass(el, clsName)) {
            curClass = curClass.replace(` ${clsName} `, ' ')
        }
    }
    if (!el.classList) {
        el.className = trim(curClass)
    }
}
