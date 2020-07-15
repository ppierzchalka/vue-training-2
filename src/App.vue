<template>
  <v-app>
    <Nav />
    <v-main class="main-content">
      <v-container class="grey lighten-5">
        <v-row>
          <v-col cols="12" sm="12">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
  mounted () {
    const route = localStorage.getItem('route')
    route && this.$router.push(route)
  },
  watch: {
    $route (toRoute, fromRoute) {
      if (toRoute.path !== fromRoute.path) {
        const { path } = toRoute
        localStorage.setItem('route', path)
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
