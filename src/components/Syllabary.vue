<template>
  <div>syllabary: {{ getSyllabary }}</div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component
export default class Syllabary extends Vue {
  @Prop() private num!: number

  get getSyllabary() {
    const n = this.num

    if (9999 < n) {
      return 'demasiado gran número'
    } else if (0 <= n && n <= 20) {
      return this.hastaVeinte(n)
    }
    const thousands = this.thousandsPlace(n)
    const hundreds = this.hundredsPlace(n % 1000)
    const tens = this.tensPlace(n % 100)
    const ones = this.onesPlace(n % 10)
    return `${thousands} ${hundreds} ${tens} y ${ones}`
  }

  thousandsPlace(n: number) {
    if (8999 < n) {
      return `nueve mil`
    } else if (7999 < n) {
      return `ocho mil`
    } else if (6999 < n) {
      return `siete mil`
    } else if (5999 < n) {
      return `seis mil`
    } else if (4999 < n) {
      return `cinco mil`
    } else if (3999 < n) {
      return `cuatro mil`
    } else if (2999 < n) {
      return `tres mil`
    } else if (1999 < n) {
      return `dos mil`
    } else if (999 < n) {
      return `mil`
    }
    return ''
  }

  hundredsPlace(n: number) {
    if (899 < n) {
      return `novecientos`
    } else if (799 < n) {
      return `ochocientos`
    } else if (699 < n) {
      return `setecientos`
    } else if (599 < n) {
      return `seiscientos`
    } else if (499 < n) {
      return `quinientos`
    } else if (399 < n) {
      return `cuatrocientos`
    } else if (299 < n) {
      return `trescientos`
    } else if (199 < n) {
      return `doscientos`
    } else if (n === 100) {
      return `cien`
    } else if (99 < n) {
      return `ciento`
    }
    return ''
  }

  tensPlace(n: number) {
    if (89 < n) {
      return `noventa`
    } else if (79 < n) {
      return `ochenta`
    } else if (69 < n) {
      return `setenta`
    } else if (59 < n) {
      return `sesenta`
    } else if (49 < n) {
      return `cincuenta`
    } else if (39 < n) {
      return `cuarenta`
    } else if (29 < n) {
      return `treinta`
    } else if (19 < n) {
      return `veniente`
    } else if (9 < n) {
      return `diez`
    }
    return ''
  }

  onesPlace(n: number) {
    if (n === 9) {
      return `nueve`
    } else if (n === 8) {
      return `ocho`
    } else if (n === 7) {
      return `siete`
    } else if (n === 6) {
      return `seis`
    } else if (n === 5) {
      return `cinco`
    } else if (n === 4) {
      return `quatro`
    } else if (n === 3) {
      return `tres`
    } else if (n === 2) {
      return `dos`
    } else if (n === 1) {
      return `uno`
    }
    return ''
  }

  hastaVeinte(n: number) {
    if (n === 20) {
      return 'veinte'
    } else if (n === 19) {
      return 'diecinueve'
    } else if (n === 18) return 'dieciocho'
    else if (n === 17) return 'diecisiete'
    else if (n === 16) return 'dieciséis'
    else if (n === 15) return 'quince'
    else if (n === 14) return 'catorce'
    else if (n === 13) return 'trece'
    else if (n === 12) return 'doce'
    else if (n === 11) return 'once'
    else if (1 <= n) return this.onesPlace(n)
    else return 'ceno'
  }
}
</script>
