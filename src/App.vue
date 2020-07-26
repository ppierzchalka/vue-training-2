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
    <Footer />
  </v-app>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },
  methods: {
    setRoute (route) {
      this.$store.commit('setRoute', route)
    }
  },
  mounted () {
    const path = localStorage.getItem('route')
    if (this.$route.path !== path) {
      path && this.$router.push(path)
    } else {
      this.setRoute(path)
    }
  },
  watch: {
    $route (toRoute, fromRoute) {
      if (toRoute.path !== fromRoute.path) {
        const { path } = toRoute
        localStorage.setItem('route', path)
        this.setRoute(path)
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
