<template>
  <div>
    <a v-bind:href="href">去百度</a>
    <img v-bind:src="img" alt="">
    <img :src="img1" alt="">
    <img src="" alt="">
  </div>
</template>

<script>
 import img1 from '../assets/logo.jpg'
export default {
   name:'MyYi2',
    data(){
        return{
            href: "http://www.baidu.com",
            img: "http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg",
            img1:img1
        }
    }
}
</script>

<style>

</style>