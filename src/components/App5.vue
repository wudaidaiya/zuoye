<template>
  <div>
    <!-- 动态绑定style 语法 v-bind:style="对象" 
  			v-bind:style = '{css属性名: 值}'-->
    <p v-bind:style="{ color: 'red', fontSize: '20px' }">小弟</p>
    <p v-bind:style="{ color: colorValue, fontSize: `${fontSize}px` }">
      小弟
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorValue: "green",
      fontSize: 60,
    };
  },
};
</script>

<style></style>
