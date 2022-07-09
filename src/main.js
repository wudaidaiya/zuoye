import Vue from "vue";
import App from "./App.vue";


import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Part from '@/views/Part.vue'
Vue.config.productionTip = false;
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
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
  }
]
const router = new VueRouter({
  routes
})
const vm = new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
