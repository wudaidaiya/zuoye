<template>
  <div>
    <p>商品总数{{ count }}</p>
    <button v-on:click="jia">+1</button>
    <button v-on:click="jia1(5)">-5</button>
    <button v-on:click="jia2">-1</button>
    <button v-on:click="jia3(5)">+5</button>
  </div>
</template>

<script>
export default {
    name:'MyYi3',
data(){
    return{
    count : 0,
    }
},
methods:{
        jia(){
        this.count++
     },
        jia1(){
         this.count-=5
     },
        jia2(){
          this.count--
     },
        jia3(){
         this.count+=5
     }
}

}
</script>

<style></style>
