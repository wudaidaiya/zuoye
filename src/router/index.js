import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'

Vue.use(VueRouter);
const routes =[
    {
        path: "/", // 默认hash值路径
        redirect: "/layout/home" // 重定向到/find
        // 浏览器url中#后的路径被改变成/find-重新匹配数组规则
      },
    {
        path:'/layout',
        component: Layout,
        children: [
            {
                path:'/layout/home',
                component: Home,
                meta:{
                    title:'首页'
                }
            },
            {
                path:'/layout/search',
                component: Search,
                meta:{
                    title:'搜索'
                }
            }
        ]
    },
]
const router = new VueRouter({
    routes,
})
export default router;