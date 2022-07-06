<template>
  <div class="my_div">
    <img :src="dog.dogImgUrl" alt="" />
    <p @click="btn" :style="{ background: colors }">{{ dog.dogName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: "",
    };
  },
  methods: {
    btn() {
      this.colors = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`;
      this.$emit('love',this.dog.dogName)
    },
  },
  props: {
    dog: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}

.my_div img {
  width: 100%;
  height: 200px;
}
</style>
