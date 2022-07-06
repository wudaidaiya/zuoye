<template>
  <div>
    <!-- 表单每一项都可以自定义
    name 选项如果没有设置 默认展示 name
    age选项如果没有设置 默认展示 age
    headImgUrl 选项根据Type去展示
    0 a标签  1 img  2 文本  必须用slot-->
    <ZuoYe>
      <template v-slot:Name="scope">
        <input type="text" :value="scope.row.name" />
      </template>
      <template v-slot:Age="scope">
        <input type="text" :value="scope.row.age" />
      </template>
      <template v-slot:tu="scope">
        <a v-if="scope.row.type == 0" :href="scope.row.headImgUrl">{{scope.row.headImgUrl}}</a>
        <img v-if="scope.row.type == 1" :src="scope.row.headImgUrl" alt="" />
        <p v-if="scope.row.type == 2">{{ scope.row.headImgUrl }}</p>
      </template>
    </ZuoYe>
    <hr />
    <br />
    <br />
    <YiQi></YiQi>
  </div>
</template>

<script>
import YiQi from "./components/04.YiQi.vue";
import ZuoYe from "./components/01.ZuoYe.vue";
export default {
  components: {
    ZuoYe,
    YiQi,
  },
};
</script>
