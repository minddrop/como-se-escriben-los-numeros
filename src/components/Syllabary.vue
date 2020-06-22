<template>
  <div>syllabary{{ num }}</div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component
export default class Syllabary extends Vue {
  @Prop() private num!: string

  syl: string = this.num
}
</script>
