<template>
  <div>
    <p>学习生命周期 - 看控制台打印</p>
    <p id="myP">{{ msg }}</p>
    <ul id="myUL">
      <li v-for="(val, index) in arr" :key="index">
        {{ val }}
      </li>
    </ul>
    <button @click="arr.push(1000)">点击末尾加值</button>
    
  </div>
</template>

<script>
export default {
data(){
        return { 
            msg: "hello, Vue",
            arr: [5, 8, 2, 1],
            timer:''
        }
    },
  // 一. 初始化
  // new Vue()以后, vue内部给实例对象添加了一些属性和方法, data和methods初始化"之前"
  beforeCreate() {
    console.log("beforeCreate ======== 执行");
    // console.log(this.msg); // undefined
  },
  // data和methods初始化以后
  // 场景: 网络请求, 注册全局事件
  created() {
    console.log("created ========= 执行");
    console.log(this.msg); // hello, Vue
  },
  beforeMount() {
    console.log("beforeMount ========= 执行");
    console.log(document.getElementById("myP")); // null
  },
  mounted() {
    console.log("mounted ========= 执行");
    console.log(document.getElementById("myP")); // p
    this.timer = setInterval(function() {
        console.log(111);
    },1000)
  },
  beforeUpdate() {
    console.log("beforeUpdate ========= 执行");
    console.log(document.querySelectorAll("#myUL>li")[4]); // undefined
  },
  updated() {
    console.log("updated ========= 执行");
    console.log(document.querySelectorAll("#myUL>li")[4]); // li
  },
   beforeDestroy(){
        console.log('beforeDestroy -- 执行');
        clearInterval(this.timer)
    },
    destroyed(){
        console.log("destroyed -- 执行");
    }
};
</script>

<style></style>
