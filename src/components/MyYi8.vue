<template>
  <div>
    <input type="text" name="" id="" v-model="val">
    <input type="text" name="" id="" :value="vall" @input="inputFn">
  </div>
</template>

<script>
export default {
data(){
    return{
        val:'',
        vall:''
    }
},
methods: {
    inputFn(e){
        this.vall=e.target.value
    }
}
}
</script>

<style>

</style>