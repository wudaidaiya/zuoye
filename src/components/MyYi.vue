<template>
  <div>{{mag}}
  <h1>{{obj.name}}</h1>
  <h1>{{obj.age}}</h1>
  <h1>{{obj.age>=18?'上网去':'回家'}}</h1>
  </div>
</template>

<script>
export default {
name:'App',
data(){
    return{
        msg:'你好你好',
        obj: {
            name:'小弟',
            age:16
        }
    }
}
}
</script>

<style>

</style>