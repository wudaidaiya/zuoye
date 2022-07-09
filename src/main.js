import Vue from "vue";
import App from "./App.vue";


import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Part from '@/views/Part.vue'
import NotFound from '@/views/NotFound'
import Ranking from '@/views/Second/Ranking.vue'
import Recommend from '@/views/Second/Recommend.vue'
import SongList from '@/views/Second/SongList.vue'
Vue.config.productionTip = false;
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path:'/',//默认hash值路径
    redirect:'/find'//重定向到/find
    //浏览器url中#后的路径被改变成、find 重学匹配数组规则
  },
  {
    path: "/find",
    name: "Find",
    component: Find,
    children: [
      {
        path: "recommend",
        component: Recommend
      },
      {
        path: "ranking",
        component: Ranking
      },
      {
        path: "songlist",
        component: SongList
      }
    ]
},
{
    path: "/my",
    name: "My",
    component: My
},
{
    path: "/part/:id",
    name: "Part",
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
