<template>
  <v-app-bar app dark>
    <NavItem
      href="/"
      title="Home"
    />
    <v-spacer></v-spacer>
    <NavList
        v-bind:articles="10"
      />
  </v-app-bar>
</template>

<script>
import NavList from './NavList'
import NavItem from './NavItem'
export default {
  name: 'Nav',
  components: {
    NavList,
    NavItem
  }
}
</script>
