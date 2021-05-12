<template>
  <div class="bg-container">
    <transition name="fade">
      <!-- // eslint-disable-next-line vue/no-use-v-if-with-v-for -->
      <div :key="activeBlock" class="imgBg" :style="{backgroundImage: `url(${blocks[activeBlock].background})`}" />>
    </transition>
    <div class="container">
      <div class="columns is-vcentered block-item">
        <div class="column">
          <img src="~/assets/img/logo-white.svg" class="iamge" width="480">
        </div>
        <div class="column is-6 is-align-self-flex-end pb-0">
          <b-carousel
            v-model="activeBlock"
            :indicator="true"
            :indicator-inside="true"
            indicator-position="is-bottom"
            :indicator-background="false"
            indicator-style="is-dots"
            :interval="8000"
            icon-pack="fas fa-3x"
            icon-prev="fa-chevron-left has-text-primary"
            icon-next="fa-chevron-right has-text-primary"
            :pause-info="false"
          >
            <b-carousel-item v-for="(block, index) in blocks" :key="`block-${index}`">
              <Block :block="block" />
            </b-carousel-item>
          </b-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Block from './carousel/Block.vue'
export default {
  components: {
    Block
  },
  fetchOnServer: false,
  async fetch () {
    const articles = await this.$content('articles')
      .where({ highlight: true })
      .only(['slug', 'title', 'description', 'date', 'category', 'author', 'image', 'tags'])
      .sortBy('date', 'desc')
      .limit(3)
      .fetch()
      .catch((err) => {
        // error({ statusCode: 404, message: 'Page not found' })
        console.log(err)
      })
    articles.forEach((article) => {
      this.blocks.push({
        title: article.title,
        content: article.description,
        urlMore: null,
        route: `/articulos/${article.slug}`,
        background: require(`../../assets/img/articulos/${article.image}`),
        isArticle: true
      })
    })
  },
  data () {
    return {
      activeBlock: 0,
      blocks: [
        {
          title: '¿Qué es JusTA?',
          content: 'Plataforma JusTA es una iniciativa para el intercambio de información, propuestas, diálogos y reclamos sobre el sistema de justicia. Promovemos una mayor apertura y rendición de cuentas del Poder Judicial y los Ministerios Públicos a través de una sección de artículos de análisis y otras de datos abiertos sobre procesos de selección y disciplinarios de jueces, juezas y fiscales, y un ranking de transparencia de estas instituciones.',
          urlMore: null,
          route: '/quienes-somos',
          background: '/bloques/bloque01.jpg',
          isArticle: false
        },
        {
          title: 'Nuestros artículos',
          content: 'Entrá acá para ver nuestros artículos sobre el funcionamiento de la justicia, transparencia, selección de jueces/as y fiscales, procesos disciplinarios y género y justicia.',
          urlMore: null,
          route: '/articulos',
          background: '/bloques/bloque01.jpg',
          isArticle: false
        }
      ]
    }
  },
  computed: {
    activeBg () {
      return this.blocks[this.activeBlock].background
    },
    theBlocks () {
      return this.blocks
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-container{
//   background-size: cover;
//   background-position: center center;
//   -webkit-transition: background 1s linear;
// transition: background 1s linear;
position: relative;
// overflow: hidden;
}
.imgBg{
  background-size: cover;
  background-position: center center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
.block-item{
  padding: 30px;
  // padding-bottom: 200px;

  @media screen and (min-width: $tablet){
  padding-top: 140px;
  min-height: 700px;
  padding: 0;
  padding-bottom: 150px;
  }
}
.block-text-container{
  padding: 30px 40px;
  background-color: #400755b0;
  background-blend-mode: multiply;
}
.upper-logo-container{
  padding: 2px 8px;
  // letter-spacing: 1px;
  background-color: #000;
}
// .lower-logo-container{
//   padding: 4px 12px;
//   font-size: 3.2rem;
//   background-color: #FFF;
// }
// .imgBg{
//   position:absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   max-width:100%;
//   max-height:100%;
//   height: auto;
//   width: auto;
//   z-index: 0;
// }
.container{
  z-index: 10;
}
</style>
