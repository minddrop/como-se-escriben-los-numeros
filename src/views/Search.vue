<template>
  <div class="search-content">
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
<style lang="scss" scoped>
.search-content {
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20%;
  margin-bottom: 20%;
}
</style>
