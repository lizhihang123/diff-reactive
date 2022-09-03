import {h, thunk, init} from 'snabbdom'

// 调用 init函数 
const patch = init([]) // init里面跟的是数组 里面的参数是模块 我们暂时不用模块 返回的是一个 高阶的函数 patch
// patch 是对比旧的和新的dom的差异,然后更新到真实的dom中


// 创建虚拟节点
// h函数第二个参数 如果是字符串 就是内容
const Vnode = h('div#container.cls', 'hello world') 
// 获取容器
const app = document.querySelector('#app')


// 通过patch函数 对比新旧虚拟dom 渲染虚拟dom 为另一个虚拟dom
// patch的第一个dom也可以是真实的dom patch会将真实的dom转化为虚拟dom
debugger
const oldVnode = patch(app, Vnode)


// 假设服务端返回了新的数据 -> 要替换页面上的节点
const newVnode = h('div', 'hello Vue')
debugger
patch(oldVnode,newVnode )
