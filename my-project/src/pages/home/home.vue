<template>
  <div class="header">
    <Home-header ></Home-header>
    <Home-swiper :swiperList="swiperList"></Home-swiper>
    <Home-icons :iconList="iconList"></Home-icons>
    <Home-Recommend :recommendList="recommendList"></Home-Recommend>
    <Home-Weekend :List="weekendList"></Home-Weekend>
  </div>
</template>
<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/swiper"
import HomeIcons from "./components/icons"
import HomeRecommend from "./components/Recommend"
import HomeWeekend from "./components/weekend"
import axios from 'axios'
export default{
    name:"Home",
    beforeRouteEnter(to, from, next){
      console.log('todo route enter');
      next();
    },
    beforeRouteUpdate(to, from, next){
      console.log('todo uppdate ernter');
      next();
    },
    beforeRouteLeave(to, from, next){
      console.log('todo leave');
      next();
    },
  components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend

  },
  data(){
      return {
        swiperList: [],
        iconList: [],
        recommendList:[],
        weekendList:[]
      }
  },
  methods:{
      getHomeInfo(){
        axios.get('/api/index.json')
          .then(this.getHomeInfoSucc)
      },
    getHomeInfoSucc(res){
        res =res.data
        if(res.ret && res.data){
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
    }
  },
  mounted() {
      this.getHomeInfo()
  }
}
</script>
<style lang="stylus" scoped>
  .header
    margin-top:-1.2rem
</style>
