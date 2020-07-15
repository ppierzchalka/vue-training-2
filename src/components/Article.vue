<template>
  <div class="article" v-bind:id="id">
    <h4 class="article-title">Article {{title}}</h4>
    <lorem class="paragraph" add="1p" />
    <button v-on:click="$router.go(-1)">Back</button>
  </div>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .article-title {
    margin: 10px 0 0;
    color: #42b983;
  }
  .paragraph {
    margin: 5px 0 15px;
    max-width: 300px;
    color: #2c3e50;
  }
  button {
    color: #35495e;
    background: #42b983;
    padding: 10px 15px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    transition: all 0.2s ease-out;
    &:hover {
      background: #35495e;
      color: #42b983;
    }
  }
}
</style>
