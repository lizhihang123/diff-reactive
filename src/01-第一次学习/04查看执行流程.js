// 模块的使用
import { h, init } from 'snabbdom'
import style from 'snabbdom/modules/style'
import eventListeners from 'snabbdom/modules/eventlisteners'
import dataset from 'snabbdom/modules/dataset'

// 注册模块
let patch = init([style, eventListeners, dataset])

// 创建虚拟dom 使用模块
let vnode = h(
    'div#app',
    {
        style:{
            backgroundColor: 'red'
        },
        on: {
            click: eventHandler
        },
        // 自定义属性的设置
        dataset: {
            time: new Date(),
            value: '123'
        }
    },
    // 子元素 用数组也可以 也可以用字符串 字符串就是表示div的内容
    // 三个参数 第三个是数组的情况
    [
        h('p', {style: { backgroundColor: 'pink' }}, '你好我是小p'),
        '132',
        h('h1',{attrs: {name: '123'}}, '我是小h1')
    ]
)

function eventHandler() {
    console.log('点击了我');
}

let app = document.querySelector('#app')
patch(app, vnode)