<template>
  <v-btn v-bind:to="href" text class="nav-button">
    {{title}}
  </v-btn>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    href: String,
    title: String
  }
}
</script>

<style scoped lang="scss">
.nav-button {
  text-transform: capitalize;
  margin: 0 2px;

}
</style>
