<template >
  <div>
    <div class="search">
      <input  v-model="keyword"
        class="search-input" type="text" placeholder="输入城市名或拼音">
      <div class="search-content" ref="search" v-show="keyword">
        <ul>
          <li
            v-for="item of list"
            :key="item.id"
          class="search-item border-bottom"
            @click="handleCityClick(item.name)"
          >{{item.name}}</li>
          <li class="search-Item border-bottom" v-show="hasNoData">
            没有找到匹配的城市
          </li>
        </ul>
      </div>
    </div>

  </div>

</template>
<script>
  import Bscroll from 'better-scroll'
  export default {
    props:{
      cities:Object
    },
    name:"CitySearch",
    data(){
      return{
        keyword:'',
        list:[],
        timer:null
      }
    },
    computed:{
      hasNoData(){
        return !this.list.length
      }
    },
    watch:{
      keyword(){
        if (this.timer){
          clearTimeout(this.timer)
        }
        if (!this.keyword){
          this.list = []
          return
        }
        this.timer = setTimeout(()=>{
          const result = []
          for (let i in this.cities){
            this.cities[i].forEach((value)=>{
              if (value.spell.indexOf(this.keyword)>-1||
              value.name.indexOf(this.keyword)>-1)
              {
                result.push(value)
              }
            })
          }
          this.list = result
        },100)
      }
    },
    mounted(){
      this.scroll = new Bscroll(this.$refs.search)
    },
    methods:{
      handleCityClick(city){
        this.$store.dispatch('changeCity',city)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~styles/variable.styl"
  .search
    height:.72rem
    background: $bgColor
    padding:.1rem
    .search-input
      box-sizing:border-box
      height:.62rem
      width: 100%
      line-height:.62rem
      padding: 0 .1rem
      text-align: center
      border-radius:.06rem
      color:#ccc
    .search-content
      z-index:1
      overflow: hidden
      position: absolute
      top:1.7rem
      left:0
      right:0
      bottom:0
      background:#eee
      .search-item
        line-height:.62rem
        padding-right:6rem
        color:  #666
        background: #fff
      .search-Item
        line-height .62rem
        padding-right:4.5rem
        color: #666
        background: #fff


</style>
