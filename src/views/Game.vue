<template>
  <div>
    <div>number: {{ num }}</div>
    <Syllabary :num="num"></Syllabary>
    <button @click="nextNum()">aaa</button>
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
  num: number = 0

  nextNum() {
    this.num = this.generateRandomNum()
  }

  generateRandomNum() {
    const num = Math.floor(Math.random() * 9000) + 1000
    return num
  }
}
</script>
