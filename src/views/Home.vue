<template>
  <div class="title">
    <Title title="Cómo se escribe los números?" />
  </div>
</template>

<script lang="ts">
import Title from '../components/Title.vue'
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component({
  components: {
    Title,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.title{
    width: 520px;
    margin-left:auto;
    margin-right:auto;
    margin-top:20%; 
    margin-bottom: 20%;
}
</style>
