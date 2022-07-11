<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model.trim="value"
      @input="inputFn"
    />
    <!-- 热门搜索 -->
    <template v-if="serachList.length == 0">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px" class="vansearch">
        <van-tag
          color="black"
          size="large"
          plain
          round
          type="primary"
          v-for="(item, index) in tags"
          :key="index"
          style="margin-right: 6px"
          @click="clickFn(item.first)"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>
    <template v-else>
      <van-cell title="最佳匹配" />

      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <SongItem
          v-for="item in serachList"
          :key="item.id"
          :name="item.name"
          :author="item.ar[0].name"
          :id="item.id"
        ></SongItem>
        <!-- <van-cell
          center
          v-for="item in serachList"
          :key="item.id"
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
        >
          <template #right-icon>
            <van-icon name="play-circle-o" size="0.6rem" />
          </template>
        </van-cell> -->
      </van-list>
    </template>
  </div>
</template>
<script>
import { getSearchTagApi, getSearchListApi } from "@/apis";
import SongItem from "@/components/SongItem";
export default {
  data() {
    return {
      tags: [],
      value: "",
      serachList: [],
      loading: false,
      finished: false,
      page: 1,
      timer: null,
    };
  },
  created() {
    this.getTagList();
  },
  methods: {
    async getTagList() {
      try {
        const res = await getSearchTagApi();
        this.tags = res.data.result.hots;
      } catch (e) {
        console.log("e");
      }
    },
    async getListFn() {
      return await getSearchListApi({
        keywords: this.value,
        limit: 20,
        offset: (this.page - 1) * 20,
      });
    },
    async clickFn(val) {
      this.page = 1;
      this.finished = false;
      this.value = val;
      const res = await this.getListFn();
      console.log(res);
      this.serachList = res.data.result.songs;
      console.log(res.data.result.songs);
      this.loading = false;
    },
    async inputFn() {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        this.page = 1;
        this.finished = false;
        // 搜索框如果为空就终止
        if (this.value.length === 0) {
          this.serachList = [];
          return;
        }
        const res = await this.getListFn();
        this.serachList = res.data.result.songs;
        console.log(res);
        if (res.data.result.songs === undefined) {
          this.serachList = [];
          return;
        } else {
          this.serachList = res.data.result.songs;
        }
        this.loading = false;
      }, 900);
    },
    async onLoad() {
      this.page++;
      const res = await this.getListFn();
      if (res.data.result.songs === undefined) {
        this.finished = true;
        return;
      }
      this.serachList = [...this.serachList, ...res.data.result.songs];
      this.loading = false;
    },
  },
  components: {
    SongItem,
  },
};
</script>
<style scoped lang="less">
.vansearch {
  color: #000;
}
</style>
