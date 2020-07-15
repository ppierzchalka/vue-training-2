<template>
  <nav>
    <h3>Random articles</h3>
    <ul>
      <NavItem
        v-for="articleData in articlesData"
        v-bind:key="articleData.id"
        v-bind:href="articleData.href"
        v-bind:title="articleData.title"
      />
    </ul>
  </nav>
</template>

<script>
import { generateArticlesData } from '../utils'
import NavItem from './NavItem'
export default {
  name: 'Nav',
  components: {
    NavItem
  },
  data: function () {
    return {
      articlesData: generateArticlesData(10)
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
