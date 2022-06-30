<template>
<div>
    <!-- v-show 
    v-show ='变量/表达式'
    变量/表达式 值 为 false 的时候 隐藏dom元素
    变量/表达式 值 为 true 的时候 显示dom元素

    变量/表达式 值 false/true 都会渲染对应的dom 样式 display: none，性能更高
    频繁的切换的时候
    -->
    <p v-show="isShow">我是v-show指令</p>
    <button @click="isShow = !isShow">click me show</button>
    <br />
    <!-- v-if ='变量/表达式'
    变量/表达式 值 为 false 的时候 隐藏dom元素
    变量/表达式 值 为 true 的时候 显示dom元素 

    false 的时候 根本不会生成对应的元素
    切换的效果 根据 元素 移除/创建 

    如果一个元素一进入页面 要么显示 要么不现实，后续不会进行切换

    -->
    <p v-if="isIf">我是v-if指令</p>
    <button @click="isIf = !isIf">click me if</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        isShow:false,
        isIf:false,
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>