<template>
  <section class="">
    <div v-if="$fetchState.pending" class="section">
      <h4 class="subtitle has-text-white is-4 has-text-centered">
        <i class="fas fa-sync fa-spin" />&nbsp; Cargando artículos
      </h4>
    </div>
    <div v-else>
      <div v-if="$fetchState.error" class="section">
        <h4 class="subtitle has-text-white is-4 has-text-centered">
          Ocurrió un error obtuviendo la galeria
        </h4>
      </div>
      <div v-else class="">
        <VueSlickCarousel v-bind="settings" class="monkey">
          <div v-for="article in articles" :key="`article-${article.slug}`" class="articles-card">
            <NuxtLink :to="`/articulos/${article.slug}`">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-2by1" :style="`background-image: url(${require(`../../assets/img/articulos/${article.image}`)})`" />
                </div>
                <div class="card-content py-5 px-4 is-flex is-flex-direction-column is-justify-content-space-between">
                  <div class="is-clearfix">
                    <p class="has-text-weight-bold is-raleway is-uppercase is-pulled-left">
                      {{ article.category }}
                    </p>
                    <p class="is-raleway is-uppercase has-text-grey is-pulled-right">
                       {{ article.date.split('T')[0].split('-').reverse().join('-') }}
                    </p>
                  </div>
                  <div>
                    <p class="title is-5 is-raleway has-text-weight-bold">
                      {{ article.title }}
                    </p>
                    <p class="subtitle is-6 is-raleway has-text-grey">
                      {{ article.author }}
                    </p>
                  </div>
                  <div class="tags">
                    <span v-for="(tag,index) in article.tags" :key="`tag-${index}`" class="tag is-special is-capitalized">{{ tag }}</span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <template slot="prevArrow">
            <div class="custom-arrow-left" />
          </template>
          <template slot="nextArrow">
            <div class="custom-arrow-right" />
          </template>
        </VueSlickCarousel>
      </div>
    </div>
    <div class="has-text-centered my-5">
      <a href="/articulos" class="button is-primary-dark"><span class="mr-3">Ver todos los artículos</span><i class="fas fa-arrow-right" /></a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    skipArticle: {
      type: String,
      required: false,
      default: () => null
    }
  },
  fetchOnServer: false,
  async fetch () {
    const articles = await this.$content('articles')
      .only(['slug', 'title', 'date', 'category', 'author', 'image', 'tags'])
      .sortBy('date', 'desc')
      .where({ slug: { $ne: this.skipArticle } })
      .limit(6)
      .fetch()
      .catch((err) => {
        // error({ statusCode: 404, message: 'Page not found' })
        console.log(err)
      })
    this.articles = articles
  },
  data () {
    return {
      test: 0,
      articles: [],
      settings: {
        arrows: false,
        dots: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 7000,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        touchThreshold: 5,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              adaptiveHeight: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: true
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.articles-card {
  padding: 10px 7px 15px 7px;
  z-index: 100;
  .title{
     display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
  .card-content{
    min-height: 190px;
  }
  .card-image .image{
    background-size: cover;
    background-position: center center;
  }
  // .image{
  //   overflow: hidden;
  //   height: 26em;
  //   img{
  //     width: 100%;
  //     height: auto;
  //   }
  // }
</style>
