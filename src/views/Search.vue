<template>
  <div>
    <input :type="number" v-model.number="num" />
    <Syllabary :num="num"></Syllabary>
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
export default class Search extends Vue {
  num: number = 0
}
</script>
