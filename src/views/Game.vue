<template>
  <div class="game-content">
   <div class="game-content_box">
    <div class="game-content_box_number">
      número: {{ num }}
    </div>
    <div class="game-content_box_syllabary">
      <Syllabary :num="num"></Syllabary>
    </div>
   </div> 
   <button class="game-content_button" @click="nextNum()">
      siguiente
   </button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import Syllabary from '../components/Syllabary.vue'

@Component({
  components: {
    Syllabary,
  },
})
export default class Game extends Vue {
  num: number = 15

  nextNum() {
    this.num = this.generateRandomNum()
  }

  generateRandomNum() {
    const num = Math.floor(Math.random() * 9000) + 1000
    return num
  }
}
</script>
<style lang="scss" scoped>
.game-content{
      width:390px;
      margin-left:auto;
      margin-right:auto;
      margin-top:20%; 
      margin-bottom: 20%;
      display:flex;
    &_box{
      width: 300px;
      &_number{
      width: 200px;
      }
      &_syllabary{
      width: 500px;
      }      
    }  
    &_button{
      width: 100px;
      margin-left: 50px;
    }  
}
</style>
