<template>
  <div>
    <h1>国内粉丝量{{ fen | guo }}</h1>
    <h1>国外粉丝量{{ fen | guo1 }}</h1>
    <h1>时间{{ shi | jian }}</h1>
    <h1>时间{{ shi | jian1 }}</h1>
  </div>
</template>

<script>
import moment from "moment"

export default {
data(){
  return{
    fen:1876986,
    shi:1636450540055,
  }
},
filters:{
  guo(val){
    return val/10000 + ' 万'
  },
  guo1(val){
    return val/1000 + ' 千'
  },
  jian(val){
     return moment(val).format('YYYY-MM-DD');
  },
   jian1(val){
     return moment(val).format('YYYY/MM/DD');
  }


}
}
</script>

<style>

</style>