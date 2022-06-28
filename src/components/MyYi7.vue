<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="btn">反转世界</button>
  </div>
</template>

<script>
export default {
data(){
    return{
        msg:'qwertyuio'
    }
},
methods:{
    btn(){
    this.msg = this.msg.split('').reverse().join('')
    }
  }
}
</script>

<style>

</style>