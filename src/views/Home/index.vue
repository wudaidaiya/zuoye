<template>
  <div class="home-container">
    <!-- 推荐歌单 -->
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in list" :key="item.id">
        <van-image width="100" height="100" :src="item.picUrl" />
        <p class="music-name van-multi-ellipsis--l2">{{ item.name }}</p>
      </van-grid-item>
    </van-grid>

    <van-cell class="title" title="最佳匹配" />
    <van-cell
      :label="`${item.song.artists[0].name}-${item.name}`"
      :title="item.name"
      v-for="item in newList"
      :key="item.id"
    >
      <template>
        <van-icon color="#000" name="play-circle-o" size="28" />
      </template>
    </van-cell>
  </div>
</template>

<script>
import { getRecommendListApi, getNewsongListApi } from "@/apis";
export default {
  data() {
    return {
      list: [],
      newList: [],
    };
  },
  mounted() {
    this.getList();
    this.getNewsongLis();
  },
  methods: {
    async getList() {
      try {
        const res = await getRecommendListApi({
          limit: 6,
        });
        this.list = res.data.result;
        console.log(res.data.result);
      } catch (e) {
        console.log("e", e);
      }
    },
    async getNewsongLis() {
      try {
        const res = await getNewsongListApi();
        this.newList = res.data.result;
        // console.log(res.data.result);
      } catch (e) {
        console.log("e", e);
      }
    },
  },
};
</script>

<style lang="less">
.home-container {
  .title {
    background-color: #9393f0;
    color: #fff;
  }

  .music-name {
    font-size: 12px;
    text-align: left;
    line-height: 20px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    height: 37px;
  }

  /deep/.van-grid-item__content {
    padding: 10px 0px;
  }
.van-icon-play-circle-o{
  padding-top: 9px;
}
.van-cell{
white-space: pre;
}
}
</style>
