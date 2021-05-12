<template>
  <section class="">
    <div class="filler has-background-primary" />
    <div class="section">
      <div class="container last-articles">
        <h1 class="title is-1 has-text-white">
          Últimos artículos
        </h1>
        <b-carousel
          :interval="8000"
          :pause-info="false"
          :indicator="false"
          :arrow="false"
        >
          <b-carousel-item v-for="article in articles" :key="article.slug">
            <div class="last-articles-container is-flex">
              <div class="article-picture" :style="`background-image: url(${require(`~/assets/img/articulos/${article.image}`)})`" />
              <div class="article-text box is-radiusless has-text-centered is-flex is-flex-direction-column is-justify-content-center">
                <h1 class="title is-3 has-text-black m-0">
                  {{ article.title }}
                </h1>
                <hr>
                <div class="content has-text-justified">
                  <p class="text-description">
                    {{ article.description }}
                  </p>
                </div>
                <div class="is-flex is-flex-direction-row">
                  <p>Por {{ article.author }}<span class="mx-2">| </span>  {{ article.date.split('T')[0].split('-').reverse().join('-') }}</p>
                  <div v-if="article.tags && article.tags.length > 0" class="tags">
                    <span v-for="(tag,i) in article.tags" :key="`tags${i}`" class="tag is-special is-capitalized">
                      {{ tag }}
                    </span>
                  </div>
                </div>
                <div class="mt-5 has-text-centered">
                  <nuxt-link :to="`/articulos/${article.slug}`" class="has-text-primary is-size-5">
                    Ver el artículo completo <i class="fas fa-arrow-right fa-lg" />
                  </nuxt-link>
                </div>
              </div>
            </div>
          </b-carousel-item>
        </b-carousel>
        <div class="my-6 py-5">
          <h1 class="subtitle is-3">
            Todos los artículos
          </h1>
          <ArticlesMasonry />
        </div>
      </div>
    </div>
    <!-- <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <div v-for="article in articles" :key="article.slug" class="my-6">
              <nuxt-link :to="`/articulos/${article.slug}`">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-2by1" :style="`background-image: url(${require(`~/assets/images/${article.image}`)})`" />
                  </div>
                  <div class="media-content">
                    <p class="is-raleway is-size-5 has-text-black">
                       {{ article.date.split('T')[0].split('-').reverse().join('-') }}
                    </p>
                    <h1 class="is-raleway is-size-4 has-text-black has-text-weight-bold">
                      {{ article.title }}
                    </h1>
                    <p class="subtitle is-raleway is'size-6">
                      Por {{ article.author }}
                    </p>
                  </div>
                </div>
                <div class="content my-3">
                  <i class="is-size-5 is-raleway has-text-justified has-text-black">
                    {{ article.description }}
                  </i>
                  <div v-if="article.tags && article.tags.length > 0" class="tags">
                    <span v-for="(tag,i) in article.tags" :key="`tags${i}`" class="tag is-primary is-capitalized">
                      {{ tag }}
                    </span>
                  </div>
                  <hr class="has-background-black">
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </section>
</template>

<script>
import ArticlesMasonry from '@/components/articles/ArticlesMasonry'

export default {
  components: {
    ArticlesMasonry
  },
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .only(['slug', 'title', 'date', 'author', 'image', 'description', 'tags'])
      .sortBy('date', 'desc')
      .fetch()
      // .catch((err) => {
      // error({ statusCode: 404, message: 'Page not found' })
      // console.err(err)
      // })
    return { articles }
  }
}
</script>

<style lang="scss" scoped>
.media .media-left{
  width: 300px;
}
.media .media-left figure{
  background-size: cover;
  background-position: center center;
}
.filler{
  height: 430px;
}
.last-articles{
  margin-top: -320px;
}
.last-articles-container{
  width: 100%;
  z-index: 10;
  .article-picture{
    background-size: cover;
    background-position: center center;
    width: 60%
  }
  .article-text{
    width: 50%;
    max-height: 400px;
    min-height: 400px;
    padding: 20px 40px;
    hr{
      width: 200px;
      background-color: #000;
      margin-left: auto;
      margin-right: auto;
    }
    .text-description{
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
      // line-height: normal;
    }
  }
}
</style>
