<template>
  <div class="block-container">
    <div class="block-text-container content has-text-left" :class="{'is-highlight': block.isArticle}">
      <h1 v-if="block.isArticle" class="title is-6 has-text-white">
        Artículo destacado
      </h1>
      <h1 class="subtitle is-4 has-text-white is-400">
        {{ block.title }}
      </h1>
      <div class="columns is-mobile is-vcentered">
        <div class="column">
          <p class="has-text-white is-400 text-description">
            {{ block.content }}
          </p>
        </div>
        <div class="column is-narrow">
          <a v-if="block.urlMore" href="" class="button is-white ">
            Ver más<i class="fas fa-arrow-right ml-4" />
          </a>
          <router-link v-if="block.route" :to="block.route" class="button is-white ">
            Ver más<i class="fas fa-arrow-right ml-4" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.block-container{
  padding: 0 40px;
}
.block-text-container{
  padding: 30px 50px 50px 50px;
  background-color: #000;
  background-blend-mode: multiply;
  min-height: 200px;
  max-height: 280px;
  &.is-highlight{
    background-color: #467CF6;
  }
}
.text-description{
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: normal;
}
</style>
