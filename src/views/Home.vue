<template>
  <div>
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
