<template>
  <div>
    <p v-text="str"></p>
    <p v-text='str'>{{str}}</p>
    <p v-html='str'></p>
    <p v-html="str">{{ 10 + 20 }}</p>
    <!-- 注意: v-text或v-html会覆盖插值表达式 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "<span>我是一个span标签</span>"
    }
  }
}
</script>