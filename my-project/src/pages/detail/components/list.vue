<template>
  <div>
    <div
      class="item"
      v-for="(item,index) of list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name:'DetailList',
    props:{
      list:Array
    }
  }
</script>
<style lang="stylus" scoped>
  .item-title
    line-height:.8rem
    font-size:.32rem
    padding:.2rem
    position: relative
    right:2rem
    .item-title-icon
      display: inline-block
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .item-children
    padding-left:.4rem


</style>
