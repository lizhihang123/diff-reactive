import { h, init } from 'snabbdom'
import style from 'snabbdom/modules/style'
import eventListeners from 'snabbdom/modules/eventlisteners'
const patch = init([style, eventListeners])
// 点击触发的事件
const eventHandler = () => {
  console.log('点了我')
}
// 虚拟节点
debugger
const vnode = h(
  'button#container.cls',
  {
    // style属性和on事件
    style: {
      backgroundColor: 'red'
    },
    on: {
      click: eventHandler
    }
  },
  '点我触发按钮'
)

let app = document.querySelector('#app')
let result = patch(app, vnode)
console.log(result);
