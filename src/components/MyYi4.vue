<template>
  <div>
    <a @click="one" href="http://www.baidu.com">阻止百度</a>
    <hr />
    <a @click="two(10, $event)" href="http://www.baidu.com">阻止去百度</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    one(e) {
      e.preventDefault();
    },
    two(a, e) {
      console.log(a);
      console.log(e);
      e.preventDefault();
    },
  },
};
</script>

<style></style>
