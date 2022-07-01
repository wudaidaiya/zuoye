<template>
  <div>
    {{ sum }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      total: 5,
      price: 98,
      coupon: 400 
    }
  },
  computed:{
    sum(){
    return this.total * this.price >= 500 ? this.total * this.price - this.coupon : this.total * this.price
    }
  }
}
</script>
