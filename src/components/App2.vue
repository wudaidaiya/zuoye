<template>
  <div>
    <h1>国内粉丝量{{ fen | guo }}</h1>
    <h1>国内粉丝量{{ fen | guo1 }}</h1>
    <p>{{ fen1 | da | dada}}</p>

  
  </div>
</template>
<script>
export default {
data(){
  return{
    fen:'1876986',
    fen1:'qwertyuiop'
  }
},
filters:{
  guo(val){
    return val.split('')
  },
  guo1(val,split){
    return val.split('').reverse().join(split)
  },
  da(val){
     return val.split('')      
  },
   dada(val){
     return val.reverse()      
  }
}
}
</script>

<style>

</style>