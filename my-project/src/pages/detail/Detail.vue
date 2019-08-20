<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :galiaryImg = "galiaryImg"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
  import  DetailBanner from './components/banner'
  import  DetailHeader from './components/header'
  import  DetailList from './components/list'
  import axios from 'axios'
  export default {
    name:'Detail',
    components:{
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data() {
      return {
        sightName: "",
        bannerImg: "",
        galiaryImg: [],
        list: []
      }
    },
    methods:{
      getDetailInfo(){
        axios.get('/api/detail.json',{
          params: {
            id:this.$route.params.id
          }
        }).then(this.handleGetDataSucc)
      },
      handleGetDataSucc(res){
        res = res.data
        if(res.ret && res.data){
          const data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.galiaryImg = data.gallaryImgs
          this.list = data.categoryList
        }
      }
    },
    mounted(){
      this.getDetailInfo()
    }
  }
</script>
<style lang="stylus" scoped>
  .content
    height:50rem
    padding-top:3rem

</style>
