<template>
  <div>
  <MyButton title='按钮组件' type="1" @myclick='clickF'></MyButton>
  </div>
</template>

<script>
import MyButton from "./components/MyButton.vue"
export default {
  components:{
    MyButton,
  },
  methods: {
    clickF(){
      alert(1111)
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
.btn {
  background-color: red;
}
.btn1 {
  background-color: rgb(19, 228, 33);
}
.btn2 {
  background-color: rgb(67, 23, 241);
}
.btn3 {
  background-color: rgb(179, 18, 223);
}
</style>
