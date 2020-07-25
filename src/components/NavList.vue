<template>
    <ul>
      <NavItem
        v-for="articleData in articlesData"
        v-bind:key="articleData.id"
        v-bind:href="articleData.href"
        v-bind:title="articleData.title"
      />
    </ul>
</template>

<script>
import { generateArticlesData } from '../utils'
import NavItem from './NavItem'
export default {
  name: 'NavList',
  components: {
    NavItem
  },
  props: {
    articles: Number
  },
  data: function () {
    return {
      articlesData: generateArticlesData(this.articles)
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
</style>
