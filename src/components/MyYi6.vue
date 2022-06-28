<template>
  <div>
    <input type="text" @keydown.enter="enterFn">
    <br>
    <input type="text" @keydown.esc="escFn">
  </div>
</template>

<script>
export default {
data(){
    return{}
},
methods: {
    enterFn(){
        alert('123')
    },
    escFn(){
        alert('321')
    }
}
}
</script>

<style>

</style>