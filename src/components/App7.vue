<template>
  <div id="app">
    <ul>
      <li v-for="item in Arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="btn">走一走</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Arr: ["帅哥", "美女", "程序猿"],
    };
  },
  methods: {
    btn() {
      this.Arr.push(this.Arr[0]);
      this.Arr.shift();
    },
  },
};
</script>