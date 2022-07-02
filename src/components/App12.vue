<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="all"/>全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="item in list" :key='item.id'>
        <td><input type="checkbox" v-model="item.c" /></td>
        <td>{{item.name}}</td>
        <td>{{item.jia}}</td>
        <td><span @click='(item.num<=1 ? 1:item.num--)'>-</span><input type="text" v-model="item.num" /><span @click='item.num++'>+</span></td>
        <td>{{item.jia*item.num}}</td>
        <td><button @click='del(item.id)'>删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click='shan'>删除选中商品</button>
    <button>清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数{{jianshu}}</p>
      <p>总价{{ zong }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "奔驰",c:false, jia:100,num:1, },
        { id: 2, name: "宝马",c:false, jia:80,num:1, },
        { id: 3, name: "奥迪",c:false, jia:60,num:1, },
      ],c:false,
      xuan:[]
    };
  },
  methods: {
    del(index) {
      // 删除按钮 - 得到索引, 删除数组里元素
      this.list.splice(index, 1);
    },
    shan(){
      this.list = this.list.filter((item) =>{
        return item.c === false
      })
    }
  },
    computed: {
      all:{
         set(val){
          this.list.forEach((ele)=>(ele.c=val))
         },
         get(){
          return this.list.every((ele)=>ele.c)
         }
      },
    zong() {
      return this.list.filter((item) =>{
        return item.c === true
      }).reduce((sum,item) => {
        return sum+=(item.jia*item.num)
      },0)
    },
    jianshu(){
      return this.list.filter((item) =>{
        return item.c ===true
      }).reduce((sum,item) => {
        return sum+=item.num
      },0)
    }
  
  },
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
