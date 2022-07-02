<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name"/>
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="age"/>
    </div>
    <div>
      <span>性别:</span>
      <select  v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="addFn(flag,arr)">添加/修改</button>
    </div>
    <div>
      <table
        border="1"
        cellpadding="10"
        cellspacing="0"
      >
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(obj,index) in arr" :key='index'>
          <td>{{index+1}}</td>
          <td>{{obj.name}}</td>
          <td>{{obj.age}}</td>
          <td>{{obj.sex}}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click='editor(obj,index)'>编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            arr:[
                 {id: 1, name: "Tom", age: 19, sex: "男"},
            ],
            name:'',
            age:0,
            sex:'',
            flag:false,
            id:0
        }
    },
    methods: {
        addFn(flag,array){
            if(this.name===''||this.age<=0||this.sex==''){
                alert('请输入正确的内容');
                return false;
            }
            console.log(array);
            if(flag==true){
                array[this.id].name=this.name,
                array[this.id].age=this.age,
                array[this.id].sex=this.sex,
                this.flag=false
            }else{
                this.arr.push({
                name:this.name,
                age:this.age,
                sex:this.sex
            })
            }
            this.name='',
            this.age=0,
            this.sex=''
        },
        del(index){
            this.arr.splice(index,1)
        },
        editor(obj,index){
            this.name=obj.name,
            this.age=obj.age,
            this.sex=obj.sex,
            this.flag=true
            this.id=index
        }
    }
}
</script>

<style scoped>
tr,
th,
td {
  border: 1px solid rgb(20, 20, 20);
}
</style>
