import Vue from 'vue'
import Router from 'vue-router'
import home from "@/pages/home/home.vue"
import city from '@/pages/city/city'
import  Detail from '@/pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },{
    path:'/city',
    name:'city',
    component:city
  },{
    path:'/detail/:id',
    name:'detail',
    component:Detail
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el,binding) {
    // 当前指令绑定的dom元素
    //console.log(el);
    // 指令传入的参数、修饰符、值  v-指令名称:参数.修饰符=值
    // console.log(binding)
    // 聚焦元素
    el.click(function () {
      alert('hi');
    })
  }
})
