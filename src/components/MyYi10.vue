<template>
  <div>
    <span>用户名</span>
    <input type="text" v-model.number="num">
    <br>
    <span>密码</span>
    <input type="text" v-model.trim="mess">
    <br>
    <textarea name="" id="" cols="30" rows="10" v-model.lazy='shi'></textarea>

  </div>
</template>

<script>
export default {
data(){
    return{
    num:'',
    mess:'',
    shi: '' 
    }
}
}
</script>

<style>

</style>