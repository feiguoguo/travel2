<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link tag="li"
        class="item border-bottom"
        v-for="item in recommendList"
        :key ="item.id"
        :to="'/detail/'+item.id"
      >
          <img class="item-img" :src="item.imgUrl" >
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>

        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'HomeRecommend',
    props:{
      recommendList:Array
    },
    data(){
      return {
        love:'you'
      }

    }
  }
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top:.2rem
    line-height:.8rem
    background: #eee
    text-indent:.2rem
    padding-right:6rem
  .item
    display: flex
    height:1.9rem
    overflow: hidden
  .item-img
    width:1.7rem
    height:1.7rem
    padding:.1rem
  .item-info
    flex:1
    padding: .1rem
    min-width:0
    .item-title
      height:.54rem
      line-height .54rem
      padding-right:3.6rem
      font-size:.32rem
      padding-top: .3rem
      ellipsis()
    .item-desc
      line-height:.4rem
      color:#ccc
      padding-right:3.6rem
      padding-top: .3rem
      ellipsis()


</style>
