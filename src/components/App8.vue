<template>
  <div>
    名字
    <input type="text" v-model="user.name" /><br />
    年龄
    <input type="text" v-model="user.age" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: 0,
      },
    };
  },
  //  deep: true, // 深度侦听(对象里面层的值改变)
  //  immediate: true // 立即侦听(网页打开handler执行一次)
  watch: {
    // name(xing, jiu){
    //   console.log(xing);
    //   console.log(jiu);
    // }
    // user: {
    //   handler(xing, jiu) {
    //     console.log(xing);
    //     console.log(jiu);
    //   },
    //   deep:true,
    // },
    "user.name": {
      handler(xing, jiu) {
        console.log(xing);
        console.log(jiu);
      },
      deep: true,
      immediate: true 
    },
  },
};
</script>

<style></style>
