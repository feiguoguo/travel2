<template>
  <div>
    <div class="banner" @click="handleClickBanner">
      <img class="banner-img"
           :src="bannerImg" >
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe604;</span>{{this.galiaryImg.length}}</div>
      </div>
    </div>
    <fade-animation>
      <common-galiary
        :imgs="galiaryImg"
        v-show="showGalairy"
        @close="handleGaliaryClose"
      ></common-galiary>
    </fade-animation>
  </div>

</template>
<script>
  import CommonGaliary from 'common/galiary/galiary'
  import FadeAnimation from 'common/fade/fade'
  export default {
    name:'DetailBanner',
    props:{
      sightName:String,
      bannerImg:String,
      galiaryImg:Array
    },
    data(){
      return{
        showGalairy:false
      }
    },
    components:{
      CommonGaliary,
      FadeAnimation
    },
    methods:{
      handleClickBanner(){
        this.showGalairy = true
      },
      handleGaliaryClose(){
        this.showGalairy = false
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .banner
    overflow: hidden
    height:0
    padding-bottom:55%
    top:0
    position: absolute
    .banner-img
      width:100%
    .banner-info
      display: felx
      position: absolute
      left:0
      right:0
      bottom:0
      line-height:.6rem
      color: #fff
      background-image: liner-gradient(top,raba(0,0,0,0),
      raba(0,0,0,0.8))
      .banner-title
        flex:1
        fontsize:.32rem
        padding:.2rem
        float:left
      .banner-number
        float: right
        padding:.4rem
        height:.1rem
        line-height:.1rem
        border-radius:.1rem
        background: #111
      .banner-icon
        font-size:.32rem


</style>
