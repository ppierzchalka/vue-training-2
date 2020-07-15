<template>
  <div id="app">
    <Nav />
    <List />
  </div>
</template>

<script>
import List from './components/List.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    List,
    Nav
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
  }
</style>
