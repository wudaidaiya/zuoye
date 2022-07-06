<template>
  <tr>
    <td><input type="checkbox" v-model="info.checked"/></td>
    <td>{{ info.name }}</td>
    <td>{{ info.price }}</td>
    <td><button @click='info.num--'>-</button>{{ info.num }}<button @click='info.num++'>+</button></td>
    <td>{{ info.price * info.num }}</td>
    <td><button @click='del(info.name)'>删除</button></td>
  </tr>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    del(val){
        const index = this.$parent.goodList.findIndex(ele => ele.name == val);
        this.$parent.goodList.splice(index,1)
    }
  }
};
</script>

<style></style>
