<template >
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities = "cities" :hotCities="hotCities"></city-list>
    <city-Alphaber :cities = "cities" ></city-Alphaber>
  </div>


</template>
<script>
import axios from 'axios'
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphaber from './components/Alphaber'
export default {
  name:'City',
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphaber
  },
  data(){
    return {
      cities:{},
      hotCities:[]
    }
  },
  methods:{
    getCityInfo(){
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res){
      res =res.data
      if (res.ret && res.data){
        const data =  res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted() {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
