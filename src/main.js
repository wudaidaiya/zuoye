import Vue from 'vue'
import App from './App.vue'
import './assets/mobile/flexible'
import './assets/styles/reset.css'
import router from '@/router';
import { NavBar,Tabbar, TabbarItem,Grid, GridItem,Cell, CellGroup,Image as VanImage,Icon,Tag,Search,List } from 'vant';
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(Icon);
Vue.use(Tag);
Vue.use(Search); 
Vue.use(List);
Vue.config.productionTip = false


import {getRecommendListApi} from '@/apis'
async function fn(){
  try{
    const res = await getRecommendListApi()
    // console.log(res);
    // console.log(aa);
  } catch(e) {
    console.log("错了");
  }
}
fn()
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
