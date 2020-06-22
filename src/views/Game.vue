<template>
  <div>
    <div>number{{ num }}</div>
    <div>syllabary</div>
    <button @click="nextNum()">aaa</button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component
export default class Game extends Vue {
  num: number = 0
  ruby: string = 'ceno'

  nextNum() {
    this.num = this.generateRandomNum()
  }

  generateRandomNum() {
    const num = Math.floor(Math.random() * 9000) + 1000
    return num
  }
}
</script>
