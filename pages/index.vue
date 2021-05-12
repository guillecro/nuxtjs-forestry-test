<template>
  <section style="overflow: auto">
    <Carousel />
    <ArticlesCarousel />
    <Vacantes />
    <Procesos />
    <Transparencia />
    <Observatorio />
    <Colaborar />
  </section>
</template>

<script>
import Carousel from '~/components/home/Carousel'
import ArticlesCarousel from '~/components/home/ArticlesCarousel'
import Vacantes from '~/components/home/Vacantes'
import Colaborar from '~/components/home/Colaborar'
import Observatorio from '~/components/home/Observatorio'
import Transparencia from '~/components/home/Transparencia'
import Procesos from '~/components/home/Procesos'

export default {
  name: 'HomePage',
  layout: 'home',
  components: {
    Carousel,
    ArticlesCarousel,
    Vacantes,
    Colaborar,
    Observatorio,
    Transparencia,
    Procesos
  }
}
</script>

<style lang="scss" scoped>

</style>
