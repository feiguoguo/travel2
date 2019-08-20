<template>
  <div class="container" @click="handleGaliaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="galiary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>

</template>
<script>
  export default {
    name:'CommonGaliary',
    props:{
      imgs:{
        type:Array,
        default (){
          return []
        }
      }
    },
    data(){
      return {
        swiperOptions:{
          pagination:'.swiper-pagination',
          paginationType:'fraction',
          observeParents:true,
          observer:true
        }
      }
    },
    methods:{
      handleGaliaryClick(){
        this.$emit('close')
      }
  }

  }
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    z-index:99
    display: flex
    flex-direction: column
    justify-content :center
    position: fixed
    width:100%
    left;0
    right:0
    top:0
    bottom:0
    background: #000
    .wrapper
      background: #000
      height: 0
      padding-bottom: 80%
      width:100%
      .galiary-img
        width:100%
      .swiper-pagination
        color: #fff
        bottom:-2rem


</style>
