<template>
  <div>
    <button :class='`btn${type}`' @click='clickFn'>{{title}} </button>

  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:'按钮组件'
        },
        type:{
            type:String,
            default:'1',
            validator(val){
             return ['1', '2', '3', '4'].includes(val)
            }
        }
    },
    methods: {
        clickFn(){
            console.log(11);
            this.$emit('myclick')
        }
    }
};
</script>

<style lang="less" scoped>
button {
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
  margin: 0 10px;
}
.btn1 {
  background-color: red;
}
.btn2 {
  background-color: rgb(19, 228, 33);
}
.btn3 {
  background-color: rgb(67, 23, 241);
}
.btn4 {
  background-color: rgb(179, 18, 223);
}
</style>
