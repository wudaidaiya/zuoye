<template>
  <div>
    <ReFs :son='Son'></ReFs>
  </div>
</template>

<script>
import ReFs from "./components/ReFs.vue";
export default {
  data () {
    return {
      Son:'艾欧尼亚，昂扬不灭'
    }
  },
  components: {
     ReFs,
  },

};
</script>
