import Vue from "vue";
import App from "./App.vue";


import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Part from '@/views/Part.vue'
import NotFound from '@/views/NotFound'
Vue.config.productionTip = false;
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path:'/',//默认hash值路径
    redirect:'/find'//重定向到/find
    //浏览器url中#后的路径被改变成、find 重学匹配数组规则
  },
  {
    path: "/find",
    component: Find
  },
  {
    path: "/my",
    component: My
  },
  {
    path: "/part",
    component: Part
  },
  {
    path: "/part/:username",
    component: Part
  },
  
  {
    path: "*",
    component: NotFound
  }
]
const router = new VueRouter({
  routes
})
const vm = new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
