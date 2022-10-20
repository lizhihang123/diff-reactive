import { h, thunk, init } from 'snabbdom'

// 1.获得patch函数
// init函数 -> 里面传递的是模块 暂时用不着这个模块 我们要的是patch函数
// patch函数 -> 比较新旧的虚拟dom的差异，然后更新到真实的dom上去
const patch = init([])

// 2.创建虚拟节点
const vnode = h('div#container.cls', 'hello world')
// 获取容器
const app = document.querySelector('#app')

// 3.通过patch函数 对比新旧的虚拟dom 渲染虚拟dom 为另一个虚拟dom
// app是旧容器 vnode是新的容器 新旧比较 多了hello world
const oldVnode = patch(app, vnode)
