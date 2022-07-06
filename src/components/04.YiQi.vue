<template>
  <div class="box">
    <div class="box1">
      <button @click="coName = 'ShouJi'" class="a1">手机注册</button>
      <button @click="coName = 'YouXiang'" class="a2">邮箱注册</button>
    </div>
    <keep-alive include="ShouJi,YouXiang">
      <component :is="coName">
        <template v-slot:shou1>
        </template>

        <template v-slot:shou2>
        </template>

        <template v-slot:shou3>
        </template>

          <template v-slot:you1>
        </template>

          <template v-slot:you2>
        </template>

          <template v-slot:you3>
        </template>

      </component>
    </keep-alive>
  </div>
</template>

<script>
import ShouJi from "./02.ShouJi.vue";
import YouXiang from "./03.YouXiang.vue";
export default {
  data() {
    return {
      coName: "ShouJi",
    };
  },
  components: {
    ShouJi,
    YouXiang,
  },
};
</script>

<style scoped>
.box {
  width: 500px;
  height: 800px;
  background: rgb(245, 241, 241);
}
.box1 {
  display: flex;
  justify-content: space-evenly;
  padding-top: 30px;
}
.a1,
.a2 {
  font-size: 25px;
  font-weight: 700;
}

</style>
