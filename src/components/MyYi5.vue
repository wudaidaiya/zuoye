<template>
  <div @click="oneFn">
    <a @click.stop="one" href="http://www.baidu.com">阻止百度</a>
    <hr />
    <a @click.prevent="two(10, $event)" href="http://www.baidu.com"
      >阻止去百度</a
    >
    <a @click.once="two1(10, $event)">阻止去百度</a>
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
    oneFn() {
      console.log('111');
    },
    two(a, e) {
      console.log(111);
      console.log(e);
    },
    two1(a, e) {
      console.log(a);
      console.log(e);
      e.preventDefault();
    },
  },
};
</script>

<style></style>
