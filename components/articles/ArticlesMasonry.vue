<template>
  <div>
    <no-ssr>
      <div v-if="$fetchState.pending" class="section">
        <h4 class="subtitle has-text-dark is-4 has-text-centered">
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
          <div v-masonry transition-duration="0.5s" item-selector=".articles-card" class="masonry-container">
            <div v-for="(article, index) in articles" :key="index" v-masonry-tile class="articles-card">
              <NuxtLink :to="`articulos/${article.slug}`">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-2by1" :style="`background-image: url(${require(`../../assets/img/articulos/${article.image}`)})`" />
                  </div>
                  <div class="card-content py-5 px-4 is-flex is-flex-direction-column is-justify-content-space-between">
                    <div>
                      <div class="is-clearfix mb-3">
                        <p class="has-text-weight-bold is-raleway is-uppercase is-pulled-left">
                          {{ article.category }}
                        </p>
                        <p class="is-raleway is-uppercase has-text-grey is-pulled-right">
                          {{ article.date.split('T')[0].split('-').reverse().join('-') }}
                        </p>
                      </div>
                      <p class="title is-5 is-raleway has-text-weight-bold is-marginless">
                        {{ article.title }}
                      </p>
                      <p class="subtitle is-6 is-raleway has-text-grey mt-2">
                        {{ article.author }}
                      </p>
                    </div>
                    <p class="my-5">{{article.description}}</p>
                    <div class="tags">
                      <span v-for="(tag,index2) in article.tags" :key="`tag-${index2}`" class="tag is-special is-capitalized">{{ tag }}</span>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </no-ssr>
  </div>
</template>
<script>
export default {
  fetchOnServer: false,
  async fetch () {
    const articles = await this.$content('articles')
      .only(['slug', 'title', 'description', 'date', 'category', 'author', 'image', 'tags'])
      .sortBy('date', 'desc')
      .fetch()
      .catch((err) => {
        // error({ statusCode: 404, message: 'Page not found' })
        console.log(err)
      })
    this.articles = articles
  },
  data () {
    return {
      articles: []
    }
  },
  mounted () {
    this.$redrawVueMasonry()
  }
}
</script>

<style lang="scss" scoped>
.articles-card {
  padding: 10px 7px 15px 7px;
  z-index: 100;
  width: calc(100% / 4);
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
