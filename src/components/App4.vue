<template>
  <div>
    <ul>
      <li v-for="(val, index) in arr" :key="index">
        {{ val }}
      </li>
    </ul>
    <button @click="fan">数组翻转</button>
    <button @click="jie">截取前3个</button>
    <button @click="geng">更新第一个元素值</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      arr: [5, 3, 9, 2, 1]
    }
  },
  methods: {
    fan(){
      this.arr.reverse()
    },
    jie(){
     this.arr.slice(0, 3)
     console.log(this.arr.slice(0, 3));
    },
   geng(){
 
      this.$set(this.arr, 0, 6)
    }
  }
}
</script>