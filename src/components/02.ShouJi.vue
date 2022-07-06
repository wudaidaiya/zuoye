<template>
  <div class="box">
    <div class="box3">
      手机号码<br />
        <input type="text" placeholder="请输入手机号" /> <br />
      <slot name="shou1">默认</slot><br />
      <input type="text" placeholder="请输入手机号" /><br />
      <slot name="shou2">默认</slot><br />
      <input type="text" placeholder="请输入手机号" /><br />
      <slot name="shou3">默认</slot><br />
      <input type="text" placeholder="请输入手机号" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  width: 500px;
  height: 800px;
  background: rgb(245, 241, 241);
}
.box3 {
  width: 500px;
  margin-top: 30px;
}
input {
  width: 400px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #333;
}
.a1,
.a2 {
  font-size: 25px;
  font-weight: 700;
}
</style>
