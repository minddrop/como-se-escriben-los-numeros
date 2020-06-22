<template>
  <div>
    <h1> {{title}} </h1>
  </div>
</template>

<script lang="ts">
import {Prop, Vue} from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component
export default class Title extends Vue {
  @Prop() private title!: string;
}
</script>
