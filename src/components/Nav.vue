<template>
  <v-app-bar app dark>
    <NavItem
      href="/"
      title="Home"
    />
    <v-spacer></v-spacer>
    <NavItem
      v-for="articleData in articlesData"
      v-bind:key="articleData.id"
      v-bind:href="articleData.href"
      v-bind:title="articleData.title"
    />
  </v-app-bar>
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
