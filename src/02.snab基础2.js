import { h, thunk, init } from 'snabbdom'

// 1.获得patch函数
const patch = init([])

// 2.创建虚拟节点
let vnode = h('div#container.cls', 'hello world')
// 获取容器
const app = document.querySelector('#app')

// 3.通过patch函数 对比新旧的虚拟dom 找到差异 打补丁 渲染到页面上去
// app是旧容器 
// vnode是新的容器 新旧比较 多了hello world
const oldVnode = patch(app, vnode)

// 4.创建第二波虚拟节点
setTimeout(() => {
  // 修改vnode的值 注意上面必须是let声明
  vnode = h('div#container.cls', [
    h('h1', '我是服务器来的h1'),
    h('h2', '我是服务器来的h2')
  ])
  // 打补丁时，记得第一个是旧的节点 vnode是更新后的节点
  let oldVnode2 = patch(oldVnode, vnode)
  console.log(oldVnode2);
}, 3000)


/* 
小结：
1.h函数可以接受1~3个参数
- 只有一个参数，创建的是一个空的节点。通过vnode方法
- 两个参数。第二个参数是数组，假设里面是这样的最终返回的虚拟节点里面有children也会有两个子节点
  vnode = h('div#container.cls', [
      h('h1', '我是服务器来的h1'),
      h('h2', '我是服务器来的h2')
    ])
- 如果是三个参数的话，第三个参数可以是text，也可以是数组(里面是子节点);第二个参数可以是对象{}里面有style on -> 赋值给data(data = b)
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
*/
