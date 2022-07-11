<template>
  <div>
    <van-nav-bar :title="$route.meta.title"
    fixed />
    <div class="main">
    <router-view></router-view>
    </div>
    <van-tabbar route>
      <van-tabbar-item to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
        // title:''
    };
  },
  mounted(){
    // 挂在后
    // console.log(this.$route.meta);
    // this.title = this.$route.meta.title;
  },
  methods:{},
  watch:{
    // $route(newval){
    //     this.title =newval.meta.title;
    // }
  }
};
</script>

<style scoped>
.main{
  margin-top: 46px;
  margin-bottom: 50px;
}
</style>
