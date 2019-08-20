<template >
    <ul class="list">
      <li class="item"
          v-for="item of letters"
          :key="item"
          :ref="item"
          @touchstart.prevent ="handleTouchStart"
          @touchmove ="handleTouchMove"
          @touchend = "handleTouchEnd"
          @click="handleLetterClick"
      >{{item}}</li>
    </ul>
</template>
<script>
  export default {
    name:"CityAlphaber",
    props:{
      cities:Object
    },
    computed:{
      letters (){
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    data(){
      return {
        touchStatus:false,
        starty:0,
        timer:null
      }
    },
    updated(){
      this.starty = this.$refs['A'][0].offsetTop
    },
    methods:{
      handleLetterClick(e){
        this.$emit('change',e.target.innerText)
      },
      handleTouchStart(){
        this.touchStatus = true
      },
      handleTouchMove(e){
        if (this.touchStatus){
          if (this.timer){
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(()=>{
            const touchy = e.touches[0].clientY-79
            const index =Math.floor((touchy-this.starty)/20)
            if(index>= 0 && index<this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          },16)

        }
      },
      handleTouchEnd(){
        this.touchStatus = false
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~styles/variable.styl"
  .list
    right:0
    display: flex
    flex-direction: column
    justify-content center
    position: absolute
    top:1.8rem
    bottom:0
    width:.5rem
  .item
    line-height: .5rem
    text-align:center
</style>
