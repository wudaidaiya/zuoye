<template>
  <div>
    <section class="todoapp">
      <TodoHeader @add="addFn" @setchecked='setcheckedFn'></TodoHeader>
      <TodoMain :list="showlist" @del="delFn"></TodoMain>
      <TodoFooter :count="count" @fliterdata="fliterdataFn" @qing='qingFn'></TodoFooter>
    </section>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  data() {
    // 铺设数据
    return {
      list:JSON.parse(localStorage.getItem('list')) || [],
      // list: [
      //   { id: 100, name: "吃饭", isDone: true },
      //   { id: 101, name: "睡觉", isDone: false },
      //   { id: 102, name: "打豆豆", isDone: true },
      // ],
      getSel: "all",
    };
  },
  methods: {
    addFn(val) {
      // 添加任务
      // 3.3 push到数组里
      let id =
        this.list.length == 0 ? 100 : this.list[this.list.length - 1].id + 1;
      this.list.push({
        id,
        name: val,
        isDone: false,
      });
    },
    delFn(id) {
      const index = this.list.findIndex((item) => item.id == id);
      this.list.splice(index, 1);
    },
    fliterdataFn(val) {
      console.log(val);
      this.getSel = val;
    },
    //清除已完成
    qingFn() {
      this.list.forEach((item) =>item.isDone = false);
    },
    setcheckedFn(val){
      this.list.forEach((ele) =>ele.isDone = val)
    }
  },
  computed: {
    count() {
      return this.list.filter((item) => item.isDone == false).length;
    },
    showlist(){
      if(this.getSel == 'no'){
         return this.list.filter((ele) => !ele.isDone);
      } else if(this.getSel == 'yes'){
       return this.list.filter((ele) => ele.isDone);
      } else{
        return this.list;
      }
    }
  },
  watch: {
        list:{
          deep:true,
          handler(val){
            localStorage.setItem('list',JSON.stringify(val || []))
          }
        }
  },
  filters: {},
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
};
</script>

<style scoped lang="scss"></style>
