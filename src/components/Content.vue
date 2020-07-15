<template>
  <Article v-bind:key="articleData.id" v-bind:id="articleData.id" v-bind:title="articleData.title" />
</template>

<script>
import Article from './Article'
import { generateArticleData } from '../utils'
export default {
  name: 'Content',
  components: {
    Article
  },
  computed: {
    articleData: function () {
      return generateArticleData(this.$route.params.id)
    }
  }
}
</script>
