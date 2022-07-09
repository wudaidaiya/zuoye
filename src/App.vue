<template>
  <div>
    <div class="footer_wrap">
      <span @click="btn('/find', 'Find')">发现音乐</span>
      <span @click="btn('/my', 'My')">我的音乐</span>
      <!-- <span @click="btn('/part', 'Part')">朋友</span> -->
      <!-- <router-link to="/part?name=小传">朋友-小传</router-link> -->
      <router-link to="/part/123">朋友-小智</router-link>
      <!-- <router-link to="/part/test/11">朋友</router-link> -->
    </div>
    <!-- http://localhost:8080/my?id=1 -->
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// this.$router.push({
//   path: '', // 路由表里配置的路径
//   name: '', // 路由表里配置的名字
// })
export default {
  methods: {
    btn(targetPath,targetName) {
      this.$router.push({
        // path: targetPath,
        path:targetName,
      });
    },
  },
};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap span {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap span:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}

/*激活时样式 */
.footer_wrap .router-link-active {
  color: white;
  background: black;
}
</style>
