import {h, init} from 'snabbdom'

let patch = init([])

// 两个参数 第二个参数是数组的情况
let vnode = h('div#container', [
    h('h1', '我是h1'),
    h('p', '我是小p')
])

let app = document.querySelector('#app')
let oldVnode = patch(app, vnode)

// 模拟从服务器获取节点
setTimeout(() => {
    vnode = h('div#container', [
        h('h1', '我是服务器来的h1'),
        h('p', '我是服务器来的p')
    ])
    patch(oldVnode, vnode)
}, 2000)
