<template>
  <v-card class="article mx-auto" v-bind:id="id" max-width="400">
    <v-card-title class="article-title">{{title}}</v-card-title>
    <v-card-text class="text--primary paragraph">
      <lorem add="1p" />
    </v-card-text>
    <v-card-actions>
      <v-btn class="back-button" v-on:click="$router.go(-1)" text>Back</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import lorem from 'vue-lorem-ipsum'
export default {
  name: 'ListHeader',
  components: {
    lorem
  },
  props: {
    id: Number,
    title: String
  }
}
</script>

<style scoped lang="scss">
.article {
  .article-title {
    color: #42b983;
  }
  .paragraph {
    text-align: justify;
    color: #2c3e50;
  }
  .back-button {
    color: #35495e;
    background: #42b983;
    font-weight: bold;
    transition: all 0.2s ease-out;
    text-transform: capitalize;
    &:hover {
      background: #35495e;
      color: #42b983;
    }
  }
}
</style>
