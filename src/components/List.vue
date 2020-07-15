<template>
  <main class="articles-list">
    <Article
      v-for="articleData in articlesData"
      v-bind:key="articleData.id"
      v-bind:id="articleData.id"
      v-bind:title="articleData.title"
    />
  </main>
</template>

<script>
import { generateArticlesData } from '../utils'
import Article from './Article'
export default {
  name: 'List',
  components: {
    Article
  },
  data: function () {
    return {
      articlesData: generateArticlesData(10)
    }
  }
}
</script>

<style scoped lang="scss">
  .articles-list {
    margin: 15px;
  }
</style>
