<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="enter"
      v-model.trim="task"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },
  computed: {
    isAll: {
      get() {
        return this.$parent.list.every((ele) => ele.isDone);
      },
      set(checked) {
        this.$emit('setchecked',checked)
        // this.$parent.list.forEach((ele) => (ele.isDone = checked));
      },
    },
  },
  methods: {
    enter() {
      if (this.task.length === 0) {
        alert("任务名不能为空");
        return;
      }
      // 3.2(重要) - 当前任务名字要加到list数组里
      // 子传父技术
      this.$emit("add", this.task);
      this.task = "";
    },
  },
};
</script>
