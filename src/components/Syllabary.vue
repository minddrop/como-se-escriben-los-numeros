<template>
  <div>{{ getSyllabary }}</div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component
export default class Syllabary extends Vue {
  @Prop() private num!: number

  get getSyllabary() {
    const n = this.num

    if (9999 < n) return 'el número es demasiado grande'
    else if (n === 0) return 'cero'
    else if (0 <= n && n < 10) return this.onesPlace(n)
    else if (10 <= n && n < 30) return this.hasta10desde29(n)

    const thousands = this.thousandsPlace(n)
    const hundreds = this.hundredsPlace(n % 1000)
    const [tens, ones] = (() => {
      const t = ((x: number) => {
        return 10 <= x && x < 30 ? this.hasta10desde29(x) : this.tensPlace(x)
      })(n % 100)
      const o = ((x: number) => {
        return !(10 <= n % 100 && n % 100 < 30) ? this.onesPlace(x) : ''
      })(n % 10)
      return [t, o]
    })()
    return `
      ${thousands !== '' ? thousands : ''}
      ${hundreds !== '' ? ' ' + hundreds : ''}
      ${tens !== '' ? ' ' + tens : ''}
      ${tens !== '' && ones !== '' ? ' y' : ''}
      ${ones !== '' ? ' ' + ones : ''}
    `
  }

  thousandsPlace(n: number) {
    if (8999 < n) return `nueve mil`
    else if (7999 < n) return `ocho mil`
    else if (6999 < n) return `siete mil`
    else if (5999 < n) return `seis mil`
    else if (4999 < n) return `cinco mil`
    else if (3999 < n) return `cuatro mil`
    else if (2999 < n) return `tres mil`
    else if (1999 < n) return `dos mil`
    else if (999 < n) return `mil`
    return ''
  }

  hundredsPlace(n: number) {
    if (899 < n) return `novecientos`
    else if (799 < n) return `ochocientos`
    else if (699 < n) return `setecientos`
    else if (599 < n) return `seiscientos`
    else if (499 < n) return `quinientos`
    else if (399 < n) return `cuatrocientos`
    else if (299 < n) return `trescientos`
    else if (199 < n) return `doscientos`
    else if (n === 100) return `cien`
    else if (99 < n) return `ciento`
    return ''
  }

  tensPlace(n: number) {
    if (89 < n) return `noventa`
    else if (79 < n) return `ochenta`
    else if (69 < n) return `setenta`
    else if (59 < n) return `sesenta`
    else if (49 < n) return `cincuenta`
    else if (39 < n) return `cuarenta`
    else if (29 < n) return `treinta`
    else if (19 < n) return `veniente`
    else if (9 < n) return `diez`
    return ''
  }

  onesPlace(n: number) {
    if (n === 9) return `nueve`
    else if (n === 8) return `ocho`
    else if (n === 7) return `siete`
    else if (n === 6) return `seis`
    else if (n === 5) return `cinco`
    else if (n === 4) return `quatro`
    else if (n === 3) return `tres`
    else if (n === 2) return `dos`
    else if (n === 1) return `uno`
    return ''
  }

  hasta10desde29(n: number) {
    if (n === 29) return 'veintinueve'
    else if (n === 28) return 'veintiocho'
    else if (n === 27) return 'veintisiete'
    else if (n === 26) return 'veintiséis'
    else if (n === 25) return 'veinticinco'
    else if (n === 24) return 'veinticuatro'
    else if (n === 23) return 'veintitrés'
    else if (n === 22) return 'veintidós'
    else if (n === 21) return 'veintiuno'
    else if (n === 20) return 'veinte'
    else if (n === 19) return 'diecinueve'
    else if (n === 18) return 'dieciocho'
    else if (n === 17) return 'diecisiete'
    else if (n === 16) return 'dieciséis'
    else if (n === 15) return 'quince'
    else if (n === 14) return 'catorce'
    else if (n === 13) return 'trece'
    else if (n === 12) return 'doce'
    else if (n === 11) return 'once'
    else if (n === 10) return 'diez'
    return ''
  }
}
</script>
